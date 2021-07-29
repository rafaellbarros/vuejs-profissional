<template>
    <div id="dash" class="container-fluid">
        <div class="row">
            <div class="col-12 col-sm-8 col-md-3 sidebar">
                <b-card
                    title="Filtros"
                    tag="article"
                    class="my-2"
                    bg-variant="dark"
                    text-variant="white"
                >
                    <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
                        <div class="row">
                            <div class="col-12">
                                <b-form-input
                                    id="input-title"
                                    v-model="filters.title"
                                    type="text"
                                    placeholder="Buscar pelo título"
                                >
                                </b-form-input>
                            </div>
                            <div class="col-12 my-3">
                                <b-form-checkbox
                                    id="checkbox-my-jobs"
                                    v-model="filters.myJobs"
                                    name="myJobs"
                                    :value="true"
                                    :unchecked-value="false"
                                    >Meus Projetos
                                </b-form-checkbox>
                            </div>
                            <div class="col-12">
                                <b-button
                                    type="submit"
                                    variant="primary"
                                    size="lg"
                                    block
                                    >Buscar</b-button
                                >
                                <b-button
                                    type="reset"
                                    variant="danger"
                                    size="sm"
                                    block
                                    >Limpar</b-button
                                >
                            </div>
                        </div>
                    </b-form>
                </b-card>
            </div>
            <div class="col-12 col-sm-8 col-md-9 lista my-2">
                <b-button
                    class="float-right"
                    @click="() => $router.push('./jobs/new')"
                    variant="success"
                    >Novo Projeto</b-button
                >
                <h3>Projetos</h3>
                <hr />
                <div v-if="jobs && jobs.length > 0">
                    <b-card
                        v-for="job in jobs"
                        :key="job.id"
                        :title="job.title"
                        :sub-title="job.Hirer.name"
                        class="my-2"
                        bg-variant="light"
                    >
                        <b-card-text>{{ job.description }}</b-card-text>
                        <div class="row">
                            <div class="col-6">
                                <strong>Orçamento</strong>
                                R$ {{ job.budget }}
                            </div>
                            <div class="col-6">
                                <strong>Propostas até:</strong>
                                R$ {{ job.deadline }}
                            </div>
                        </div>
                        <div class="text-right">
                            <hr />
                            <b-button variant="primary " block
                                >Mais detalhes...</b-button
                            >
                        </div>
                    </b-card>
                    <div
                        class="actions text-center"
                        v-if="pagination.count > 0"
                    >
                        <b-button
                            variant="primary"
                            @click="previous()"
                            class="mr-2"
                            :disabled="disablePrevious"
                            >Anterior</b-button
                        >
                        <b-button
                            variant="primary"
                            @click="next()"
                            :disabled="disableNext"
                            >Próximo</b-button
                        >
                        <p class="text-muted">
                            <small>
                                Do projeto {{ first }} até {{ last }} - Total de
                                {{ pagination.count }} projetos
                            </small>
                        </p>
                    </div>
                </div>
                <div v-else>
                    <span class="text-muted">Nehum projeto encontrado...</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { apiProtected } from '../services/apiService'

export default {
    data() {
        return {
            jobs: null,
            filters: {
                title: '',
                myJobs: false,
            },
            pagination: {
                offset: 0,
                limit: 5,
                count: 0,
            },
        }
    },
    methods: {
        async search() {
            try {
                this.jobs = null
                const params = {}
                if (this.filters.title) {
                    params.title = this.filters.title
                }

                if (this.filters.myJobs) {
                    params.userId = this.$store.state.user.id
                }

                params.limit = this.pagination.limit
                params.offset = this.pagination.offset
                const response = await apiProtected.get('/jobs', {
                    params,
                })
                this.jobs = response.data.data
                this.pagination = response.data.meta
            } catch (error) {
                console.log(error)
            }
        },
        previous() {
            this.pagination.offset -= this.pagination.limit
            this.search()
        },
        next() {
            this.pagination.offset += this.pagination.limit
            this.search()
        },
        onSubmit() {
            this.pagination = {
                offset: 0,
                limit: 5,
                count: 0,
            }
            this.search()
        },
        onReset() {
            this.filters = {
                title: '',
                myJobs: false,
            }
        },
    },
    mounted() {
        this.search()
    },
    computed: {
        disablePrevious() {
            return !this.pagination || this.pagination.offset === 0
        },
        disableNext() {
            return (
                !this.pagination ||
                this.pagination.offset + this.pagination.limit >=
                    this.pagination.count
            )
        },
        first() {
            return this.pagination.count > 0 ? this.pagination.offset + 1 : 0
        },
        last() {
            const last = this.pagination.offset + this.pagination.limit
            return last < this.pagination.count ? last : this.pagination.count
        },
    },
}
</script>

<style></style>
