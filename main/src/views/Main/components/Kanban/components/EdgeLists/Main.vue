<template>
    <div class="edge-tabel">
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
            :itemClass="itemRowBackground"
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
import edgeList from '@/mock/edgeList';

export default {
    name: 'EdgeLists',
    data() {
        return {
            headers: [
                // {
                //     text: 'Dessert (100g serving)',
                //     align: 'start',
                //     sortable: false,
                //     value: 'name'
                // },
                { text: 'update_tmsp ', value: 'updateTmsp', align: 'center' },
                { text: 'meta_id', value: 'metaId', align: 'center' },
                { text: 'edge_id', value: 'edgeId', align: 'center' },
                { text: 'heart_beat_status', value: 'heartBeatStatus', align: 'center' }
            ],
            data: {
                page: 1,
                pageCount: 10,
                itemsPerPage: 10,
                list: [
                    {
                        edgeId: 'ED-000009',
                        metaId: 'm2109133-0001',
                        updateTmsp: '2021/09/26 11:20:30',
                        heartBeatStatus: 'alive'
                    },
                    {
                        edgeId: 'ED-000002',
                        metaId: 'm2109133-0002',
                        updateTmsp: '2021/09/26 11:20:30',
                        heartBeatStatus: 'N/A'
                    }
                ],
                status: {
                    totaolEdgeDevice: 9,
                    alive: 5,
                    'N/A': 4
                }
            }

        };
    },
    computed: {
        statusShow() {
            const { status: { totaolEdgeDevice, alive } } = this.data;
            const newStatus = [
                {
                    text: 'Totaol Edge Device',
                    value: totaolEdgeDevice
                },
                {
                    text: 'alive',
                    value: alive
                },
                {
                    text: 'N/A',
                    value: this.data.status['N/A']
                }
            ];
            return newStatus;
        }
    },
    created() {
        console.log(edgeList, 'edgeList');
        this.data = { ...this.data, ...edgeList.data };
    },
    methods: {
        itemRowBackground(item) {
            return item.heartBeatStatus === 'N/A' && 'tr-red';
        },
        camalize(str) {
            return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toLocaleUpperCase());
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .edge-tabel {
        margin: 0 auto;
        max-width: 800px;
        color: #707070;
        .text-block {
            display: inline-block;
            vertical-align: middle;
            width: 33%;
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

<style lang="scss">
.edge-tabel {
    .v-data-table__wrapper {
         box-shadow: 0px 0px 4px 0px #A0A0A0;
    }
    .v-data-table {
        color: #3D3D3D;
         .v-data-table-header th {
             font-size: 16px;
             font-weight: bold;
        }
    }
    .tr-red {
        background-color: #EFC1C2;
    }
    .v-pagination  {
        button {
            box-shadow: 0px 0px 2px 1px rgb(66 35 35 / 45%);
        }
    }
}
</style>
