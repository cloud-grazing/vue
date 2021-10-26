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
            @page-count="data.PageCount = $event"
        />
        <div class="text-center pt-2">
            <v-pagination
                v-model="data.Page"
                :length="data.PageCount"
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
                { text: 'update_tmsp ', value: 'UpdateTmsp', align: 'center' },
                { text: 'meta_id', value: 'MetaID', align: 'center' },
                { text: 'edge_id', value: 'EdgeID', align: 'center' },
                { text: 'heart_beat_status', value: 'HeartBeatStatus', align: 'center' }
            ],
            data: {
                Page: 1,
                PageCount: 10,
                ItemsPerPage: 10,
                List: [
                    {
                        EdgeID: '',
                        MetaID: '',
                        UpdateTmsp: '',
                        HeartBeatStatus: ''
                    }
                ],
                Status: {
                    TotaolEdgeDevice: 0,
                    Alive: 0,
                    Dead: 0
                }
            }

        };
    },
    computed: {
        statusShow() {
            const { Status: { TotaolEdgeDevice, Alive, Dead } } = this.data;
            const newStatus = [
                {
                    text: 'Totaol Edge Device',
                    value: TotaolEdgeDevice
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
