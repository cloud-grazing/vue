<template>
    <div class="edge-tabel">
        <v-data-table
            :headers="data.headers"
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
            data: {
                page: 1,
                pageCount: 10,
                itemsPerPage: 10,
                headers: [
                // {
                //     text: 'Dessert (100g serving)',
                //     align: 'start',
                //     sortable: false,
                //     value: 'name'
                // },
                    { text: 'update_tmsp ', value: 'updateTmsp' },
                    { text: 'meta_id', value: 'metaId' },
                    { text: 'edge_id', value: 'edgeId' },
                    { text: 'heart_beat_status', value: 'heartBeatStatus' }
                ],
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
                ]
            }

        };
    },
    created() {
        console.log(edgeList, 'edgeList');
    },
    methods: {
        itemRowBackground(item) {
            return item.heartBeatStatus === 'N/A' && 'tr-red';
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .edge-tabel {
        margin: 0 auto;
        max-width: 800px;
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
