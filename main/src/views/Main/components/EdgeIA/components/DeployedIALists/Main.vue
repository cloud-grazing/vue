<template>
    <div class="deployed-ia-lists use-normal-table">
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
        </div>
    </div>
</template>

<script>
import deployedIALists from '@/mock/deployedIALists';

export default {
    name: 'DeployedIALists',
    data() {
        return {
            headers: [
                { text: 'IA Device ID', value: 'IA_DeviceID', align: 'center' },
                { text: 'IA Location', value: 'IA_Location', align: 'center' },
                { text: 'deployed_model', value: 'DeployedModel', align: 'center' },
                { text: 'deployed_tmsp', value: 'DeployedTmsp', align: 'center' },
                { text: 'deployed_user', value: 'DeployedUser', align: 'center' },
                { text: 'IA Status', value: 'IA_Status', align: 'center' }
            ],
            data: {
                Page: 1,
                PageCount: 10,
                ItemsPerPage: 10,
                List: [
                    {
                        IA_DeviceID: '',
                        IA_Location: '',
                        DeployedModel: '',
                        DeployedTmsp: '',
                        DeployedUser: '',
                        IA_Status: ''
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
    created() {
        console.log(deployedIALists, 'deployedIALists');
        this.data = { ...this.data, ...deployedIALists.data };
    },
    methods: {
        itemRowBackground(item) {
            return item.IA_Status === 'down' && 'tr-red';
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .deployed-ia-lists {
        min-width: 1000px;
    }
</style>
