<template>
    <div class="model-lists use-normal-table">
        <p class="tabel-title">Available IA Device LIsts</p>
        <v-data-table
            :headers="headers"
            :items="data.List"
            :page.sync="data.Page"
            :itemsPerPage="data.ItemsPerPage"
            hideDefaultFooter
            class="elevation-1"
            :itemClass="itemRowBackground"
            @page-count="data.PageCount = $event"
        >
            <template v-slot:[`item.Check`]="{ item }">
                <v-simple-checkbox
                    :value="checkedID === item.ID"
                    @input="onCheck(item.ID)"
                />
            </template>
        </v-data-table>
        <div class="text-center pt-2">
            <v-pagination
                v-model="data.Page"
                :length="data.PageCount"
            />
        </div>
    </div>
</template>

<script>
import deviceList from '@/mock/deviceList';

export default {
    name: 'DeviceList',
    data() {
        return {
            checkedID: null,
            headers: [
                { text: 'check ', value: 'Check', align: 'center' },
                { text: 'IA Device ID', value: 'IA_DeviceID', align: 'center' },
                { text: 'IA Location', value: 'IA_Location', align: 'center' },
                { text: 'model existed?', value: 'ModelExisted', align: 'center' }
            ],
            data: {
                Page: 1,
                PageCount: 10,
                ItemsPerPage: 10,
                List: [
                    {
                        ID: null,
                        IA_DeviceID: '',
                        IA_Location: '',
                        ModelExisted: ''
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
    },
    created() {
        console.log(deviceList, 'deviceList');
        this.data = { ...this.data, ...deviceList.data };
    },
    methods: {
        itemRowBackground(item) {
            return item.heartBeatStatus === 'N/A' && 'tr-red';
        },
        onCheck(id) {
            this.checkedID = id;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .model-lists {
        display: inline-block;
        vertical-align: middle;
        width: 45%;
        min-width: 400px;
        .tabel-title {
            margin-left: 2px;
            font-weight: bold;
            text-align: left;
            text-decoration: underline;
        }
    }
</style>
