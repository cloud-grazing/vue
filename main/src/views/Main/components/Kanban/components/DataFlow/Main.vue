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
            <!-- <v-text-field
                :value="itemsPerPage"
                label="Items per page"
                type="number"
                min="-1"
                max="15"
                @input="itemsPerPage = parseInt($event, 10)"
            /> -->
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
                page: 1,
                pageCount: 10,
                itemsPerPage: 10,
                list: [
                    {
                        edgeId: 'ED-000009',
                        metaId: 'm2109133-0001',
                        dataCollectTmsp: '2021/09/26 11:20:30',
                        dataType: 'json',
                        flowDirection: 'm2109133-0001'
                    },
                    {
                        edgeId: 'ED-000002',
                        metaId: 'm2109133-0002',
                        dataCollectTmsp: '2021/09/26 11:20:30',
                        dataType: 'json',
                        flowDirection: 'm2109133-0001'
                    }
                ],
                status: {
                    totaolRecords: 25,
                    inbound: 124,
                    outBound: 20
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
