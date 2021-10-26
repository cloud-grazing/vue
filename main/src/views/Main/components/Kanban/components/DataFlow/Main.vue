<template>
    <div class="data-flow use-normal-table">
        <div v-for="(item, index) in statusShow" :key="index" class="text-block">
            <div class="tip-title">{{ item['text'] }}</div>
            <div class="tip-number">{{ item['value'] }}</div>
        </div>
        <v-data-table
            :headers="headers"
            :items="data.list"
            :page.sync="data.page"
            :itemsPerPage="data.itemsPerPage"
            hideDefaultFooter
            class="elevation-1"
            @page-count="data.pageCount = $event"
        />
        <div class="text-center pt-2">
            <v-pagination
                v-model="data.page"
                :length="data.pageCount"
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
                { text: 'data_collect_tmsp  ', value: 'dataCollectTmsp', align: 'center' },
                { text: 'meta_id', value: 'metaId', align: 'center' },
                { text: 'edge_id', value: 'edgeId', align: 'center' },
                { text: 'data_type', value: 'dataType', align: 'center' },
                { text: 'flow_direction', value: 'flowDirection', align: 'center' }
            ],
            data: {
                page: 0,
                pageCount: 0,
                itemsPerPage: 10,
                list: [
                    {
                        edgeId: '',
                        metaId: '',
                        dataCollectTmsp: '',
                        dataType: '',
                        flowDirection: ''
                    }
                ],
                status: {
                    totaolRecords: 0,
                    inbound: 0,
                    outBound: 0
                }
            }

        };
    },
    computed: {
        statusShow() {
            const { status: { totaolRecords, inbound, outBound } } = this.data;
            const newStatus = [
                {
                    text: 'Total Records',
                    value: totaolRecords
                },
                {
                    text: 'Inbound',
                    value: inbound
                },
                {
                    text: 'Outbound',
                    value: outBound
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
