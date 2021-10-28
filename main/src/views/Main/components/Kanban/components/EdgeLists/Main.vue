<template>
    <div class="edge-lists use-normal-table">
        <div v-for="(item, index) in statusShow" :key="index" class="text-block">
            <div class="tip-title">{{ item['text'] }}</div>
            <div class="tip-number">{{ item['value'] }}</div>
        </div>
        <v-data-table
            :headers="headers"
            :items="data.List"
            :page.sync="data.Page"
            :itemsPerPage="data.ItemsPerPage"
            hideDefaultFooter
            class="elevation-1"
            :itemClass="itemRowBackground"
            @page-count="data.Total = $event"
        >
            <template v-slot:[`item.UpdateTmsp`]="{ item }">
                {{ timeFormat(item.UpdateTmsp) }}
            </template>
            <template v-slot:[`item.HeartBeatStatus`]="{ item }">
                <span v-if="item.HeartBeatStatus === 1">alive</span>
                <span v-else>N/A</span>
            </template>
        </v-data-table>
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
import moment from 'moment';

export default {
    name: 'EdgeLists',
    data() {
        return {
            Page: 1,
            TotalPage: 1,
            PerPage: 10, // 當頁筆數
            headers: [
                { text: 'update_tmsp ', value: 'UpdateTmsp', align: 'center' },
                { text: 'meta_id', value: 'MetaID', align: 'center' },
                { text: 'edge_id', value: 'EdgeID', align: 'center' },
                { text: 'heart_beat_status', value: 'HeartBeatStatus', align: 'center' }
            ],
            data: {
                Page: 1,
                Total: 10,
                PerPage: 10,
                List: [
                    {
                        EdgeID: '',
                        MetaID: '',
                        UpdateTmsp: '',
                        HeartBeatStatus: ''
                    }
                ],
                Status: {
                    Total: 0,
                    Alive: 0,
                    Dead: 0
                }
            }

        };
    },
    computed: {
        statusShow() {
            const { Status: { Alive, Dead }, Total } = this.data;
            const newStatus = [
                {
                    text: 'Totaol Edge Device',
                    value: Total
                },
                {
                    text: 'alive',
                    value: Alive
                },
                {
                    text: 'N/A',
                    value: Dead
                }
            ];
            return newStatus;
        }
    },
    watch: {
        Page() {
            this.getEdgeList();
        }
    },
    created() {
        this.getEdgeList();
    },
    methods: {
        itemRowBackground(item) {
            return item.HeartBeatStatus === 2 && 'tr-red';
        },
        getEdgeList() {
            axios.get('/api/edge-list', {
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
        },
        timeFormat(tiem) {
            return moment(tiem).format('YYYY-MM-DD HH:mm:ss');
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .edge-lists {
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
            &:nth-child(3) .tip-number {
                color: #F00;
            }
        }
    }
</style>
