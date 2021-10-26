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
                v-model="data.Page"
                :length="data.PageCount"
            />
        </div>
    </div>
</template>

<script>
import dataFlow from '@/mock/dataFlow';

export default {
    name: 'DataFlow',
    data() {
        return {
            headers: [
                { text: 'data_collect_tmsp  ', value: 'DataCollectTmsp', align: 'center' },
                { text: 'meta_id', value: 'MetaID', align: 'center' },
                { text: 'edge_id', value: 'EdgeID', align: 'center' },
                { text: 'data_type', value: 'DataType', align: 'center' },
                { text: 'flow_direction', value: 'FlowDirection', align: 'center' }
            ],
            data: {
                Page: 0,
                PageCount: 0,
                ItemsPerPage: 10,
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
            const { Status: { TotaolRecords, Inbound, OutBound } } = this.data;
            const newStatus = [
                {
                    text: 'Total Records',
                    value: TotaolRecords
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
    created() {
        console.log(dataFlow, 'edgeList');
        this.data = { ...this.data, ...dataFlow.data };
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
