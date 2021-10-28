<template>
    <div class="data-flow use-normal-table">
        <div v-for="(item, index) in statusShow" :key="index" class="text-block">
            <div class="tip-title">{{ item['text'] }}</div>
            <div class="tip-number">{{ item['value'] }}</div>
        </div>
        <v-data-table
            :headers="headers"
            :items="data.List"
            :page.sync="data.Page"
            :ItemsPerPage="data.ItemsPerPage"
            hideDefaultFooter
            class="elevation-1"
            @page-count="data.PageCount = $event"
        />
        <div class="text-center pt-2">
            <v-pagination
                v-model="Page"
                :length="TotalPage"
            />
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'DataFlow',
    data() {
        return {
            Page: 1,
            TotalPage: 1,
            PerPage: 10, // 當頁筆數
            headers: [
                { text: 'data_collect_tmsp  ', value: 'DataCollectTmsp', align: 'center' },
                { text: 'meta_id', value: 'MetaID', align: 'center' },
                { text: 'edge_id', value: 'EdgeID', align: 'center' },
                { text: 'data_type', value: 'DataType', align: 'center' },
                { text: 'flow_direction', value: 'FlowDirection', align: 'center' }
            ],
            data: {
                Page: 1,
                Total: 10,
                PerPage: 10,
                List: [
                    {
                        EdgeID: '',
                        MetaID: '',
                        DataCollectTmsp: '',
                        DataType: '',
                        FlowDirection: ''
                    }
                ],
                Status: {
                    TotaolRecords: 0,
                    Inbound: 0,
                    OutBound: 0
                }
            }

        };
    },
    computed: {
        statusShow() {
            const { Status: { Inbound, OutBound }, Total } = this.data;
            const newStatus = [
                {
                    text: 'Total Records',
                    value: Total
                },
                {
                    text: 'Inbound',
                    value: Inbound
                },
                {
                    text: 'Outbound',
                    value: OutBound
                }
            ];
            return newStatus;
        }
    },
    watch: {
        Page() {
            this.getDataFlow();
        }
    },
    created() {
        this.getDataFlow();
    },
    methods: {
        getDataFlow() {
            axios.get('/api/data-flow', {
                params: {
                    PerPage: this.PerPage,
                    Page: this.Page
                }
            }).then((response) => {
                const res = response.data;
                if (res.msg !== 'OK') {
                    alert(res.msg || 'api發生異常');
                    return;
                }
                this.data = { ...this.data, ...res.data };
                this.TotalPage = Math.ceil(this.data.Total / this.data.PerPage);
            }).catch((error) => {
                console.log(error);
            });
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .data-flow {
        .text-block {
            display: inline-block;
            vertical-align: middle;
            width: 33.3%;
            text-align: center;
            font-weight: bold;
            .tip-title {
                font-size: 20px;
                overflow : hidden;
                text-overflow : ellipsis;
                white-space : nowrap;
                text-decoration: underline;
            }
            .tip-number {
                font-size: 80px;
            }
            &:nth-child(1) .tip-number {
                font-size: 65px;
            }
        }
    }
</style>
