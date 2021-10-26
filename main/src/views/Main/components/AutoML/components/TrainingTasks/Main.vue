<template>
    <div class="training-tasks use-normal-table">
        <v-data-table
            :headers="headers"
            :items="data.List"
            sortBy="calories"
            class="elevation-1"
            :itemClass="itemRowBackground"
        >
            <template v-slot:top>
                <v-dialog v-model="dialogDelete" maxWidth="500px">
                    <v-card>
                        <v-card-title class="text-h5">Delete this Item?</v-card-title>
                        <v-card-actions>
                            <v-spacer />
                            <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                            <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                            <v-spacer />
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </template>
            <template v-slot:[`item.Actions`]="{ item }">
                <v-icon
                    small
                    class="red-color"
                    @click="deleteItem(item)"
                >
                    mdi-delete
                </v-icon>
            </template>
            <template v-slot:[`item.StatusStep`]="{ item }">
                <span>{{ item.Status }}</span>
                &nbsp;
                <span>{{ item.Step }}</span>
            </template>
            <template v-slot:no-data>
                <v-btn
                    color="primary"
                    @click="initialize"
                >
                    Reset
                </v-btn>
            </template>
        </v-data-table>
    </div>
</template>

<script>
import trainingTasks from '@/mock/trainingTasks';

export default {
    data: () => ({
        dialogDelete: false,
        headers: [
            { text: 'Task ID', value: 'TaskID' },
            { text: 'Project', value: 'Project' },
            { text: 'Model Name', value: 'ModelName', align: 'center' },
            { text: 'status/step', value: 'StatusStep', align: 'center' },
            { text: 'Creating Time', value: 'CreatingTime', align: 'center' },
            { text: 'Creating User', value: 'CreatingUser', align: 'center' },
            { text: 'action', value: 'Actions', sortable: false, align: 'center' }
        ],
        data: {
            List: [
                {
                    CreatingTime: '',
                    CreatingUser: '',
                    ModelName: '',
                    Project: '',
                    Status: '',
                    Step: '',
                    TaskID: ''
                }
            ]
        },
        editedIndex: -1,
        editedItem: {
            name: '',
            calories: 0,
            fat: 0,
            carbs: 0,
            protein: 0
        },
        defaultItem: {
            name: '',
            calories: 0,
            fat: 0,
            carbs: 0,
            protein: 0
        },
        currentDeleteTaskID: ''
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item';
        }
    },

    watch: {
        dialogDelete(val) {
            if (!val) {
                this.closeDelete();
                this.currentDeleteTaskID = '';
            }
        }
    },
    created() {
        this.initialize();
    },
    methods: {
        initialize() {
            console.log(trainingTasks, 'trainingTasks');
            this.data = trainingTasks.data;
        },
        deleteItem(item) {
            this.currentDeleteTaskID = item.TaskID;
            this.editedIndex = this.data.List.indexOf(item);
            this.editedItem = { ...item };
            this.dialogDelete = true;
        },
        deleteItemConfirm() {
            this.desserts.splice(this.editedIndex, 1);
            this.closeDelete();
        },
        closeDelete() {
            this.dialogDelete = false;
            this.$nextTick(() => {
                this.editedItem = { ...this.defaultItem };
                this.editedIndex = -1;
            });
        },
        itemRowBackground(item) {
            return item.TaskID === this.currentDeleteTaskID && 'tr-red';
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .training-tasks {
        margin: 0 auto;
        max-width: 1200px;
        .red-color {
            color: #F00;
        }
    }
</style>
