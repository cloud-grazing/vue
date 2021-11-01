<template>
    <div class="training-request">
        <div class="observer">
            <!-- Model Category -->
            <validation-observer
                ref="observer"
                v-slot="{ invalid }"
            >
                <form @submit.prevent="submit">
                    <validation-provider
                        v-slot="{ errors }"
                        name="Model Category"
                        rules="required"
                    >
                        <v-select
                            v-model="post.ModelCategory"
                            :hint="`${data.ModelCategory.name}, ${data.ModelCategory.id}`"
                            :items="data.ModelCategory"
                            :errorMessages="errors"
                            itemText="name"
                            itemValue="id"
                            label="Model Category"
                            data-vv-name="Model Category"
                            required
                        />
                    </validation-provider>
                    <validation-provider
                        v-slot="{ errors }"
                        name="Data Type"
                        rules="required"
                    >
                        <v-select
                            v-model="post.DataType"
                            :hint="`${data.DataType.name}, ${data.DataType.id}`"
                            :items="data.DataType"
                            :errorMessages="errors"
                            itemText="name"
                            itemValue="id"
                            label="Data Type"
                            data-vv-name="Data Type"
                            required
                        />
                    </validation-provider>

                    <v-btn
                        class="white--text"
                        xLarge
                        type="submit"
                        :disabled="invalid"
                        color="teal"
                    >
                        MODEL SETUP
                    </v-btn>
                </form>
            </validation-observer>
        </div>

        <div class="mt-5 observer2">
            <!-- TRAING SUBMIT -->
            <validation-observer
                ref="observer2"
                v-slot="{ invalid }"
            >
                <form @submit.prevent="submit2">
                    <validation-provider
                        v-slot="{ errors }"
                        name="Edge ID"
                        rules="required"
                    >
                        <v-select
                            v-model="post.EdgeID"
                            :hint="`${data.EdgeID.name}, ${data.EdgeID.id}`"
                            :items="data.EdgeID"
                            :errorMessages="errors"
                            itemText="name"
                            itemValue="id"
                            label="Edge ID"
                            data-vv-name="Edge ID"
                            required
                        />
                    </validation-provider>
                    <validation-provider
                        v-slot="{ errors }"
                        name="Data Type"
                        rules="required"
                    >
                        <v-select
                            v-model="post.DatasetAutomation"
                            :hint="`${data.DatasetAutomation.name}, ${data.DatasetAutomation.id}`"
                            :items="data.DatasetAutomation"
                            :errorMessages="errors"
                            itemText="name"
                            itemValue="id"
                            label="Data Type"
                            data-vv-name="Data Type"
                            required
                        />
                    </validation-provider>

                    <v-btn
                        class="white--text"
                        xLarge
                        type="submit"
                        :disabled="invalid"
                        color="info"
                    >
                        TRAINING SUBMIT
                    </v-btn>
                </form>
            </validation-observer>
        </div>
    </div>
</template>

<script>
import { required } from 'vee-validate/dist/rules';
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate';

setInteractionMode('eager');

extend('required', {
    ...required,
    message: '{_field_} can not be empty'
});

export default {
    name: 'TrainingRequest',
    components: {
        ValidationProvider,
        ValidationObserver
    },
    data() {
        return {
            name: '',
            phoneNumber: '',
            email: '',
            select: null,
            data: {
                ModelCategory: [
                    { name: 'classification model', id: 'o01-342' },
                    { name: 'classification model2', id: 'o01-343' },
                    { name: 'classification model3', id: 'o01-344' },
                    { name: 'classification model4', id: 'o01-344' },
                    { name: 'classification model5', id: 'o01-345' }
                ],
                DataType: [
                    { name: 'images', id: '0' },
                    { name: 'file', id: '1' },
                    { name: 'folder', id: '2' }
                ],
                EdgeID: [
                    { name: 'ED-000001', id: '2' },
                    { name: 'ED-000002', id: '3' },
                    { name: 'ED-000003', id: '4' },
                    { name: 'ED-000004', id: '4' },
                    { name: 'ED-000005', id: '5' }
                ],
                DatasetAutomation: [
                    { name: 'RPA-flow-IMG-000', id: '1' },
                    { name: 'RPA-flow-IMG-001', id: '2' },
                    { name: 'RPA-flow-IMG-002', id: '3' },
                    { name: 'RPA-flow-IMG-003', id: '4' },
                    { name: 'RPA-flow-IMG-004', id: '4' },
                    { name: 'RPA-flow-IMG-005', id: '5' }
                ]
            },
            post: {
                ModelCategory: '',
                DataType: '',
                EdgeID: '',
                DatasetAutomation: ''
            },
            checkbox: null
        };
    },
    created() {
        console.log(this.data, 'data');
    },
    methods: {
        submit() {
            this.$refs.observer.validate();
            console.log(this.post, 'post');
        },
        submit2() {
            this.$refs.observer2.validate();
            console.log(this.post, 'post');
        }
    }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .training-request {
        padding: 20px 30px;
        max-width: 500px;
        text-align: left;
    }
</style>
