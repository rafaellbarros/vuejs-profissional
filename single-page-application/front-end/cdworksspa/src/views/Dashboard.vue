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
                                    value="true"
                                    unchecked-value="fales"
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
                    <!-- v-if="pagination.count > 0" -->
                    <div class="actions text-center">
                        <b-button
                            variant="primary"
                            @click="previus()"
                            class="mr-2"
                            >Anterior</b-button
                        >
                        <b-button variant="primary" @click="next()"
                            >Próximo</b-button
                        >
                        <p class="text-muted">
                            <small>
                                Do projeto PRIMEIRO_REGISTOR até ULTIMO_REGISTRO
                                - Total de TOTAL_REGISTROS projetos
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
export default {
    data() {
        return {
            jobs: [
                {
                    id: 2,
                    userId: 1,
                    title: 'Teste 2',
                    description: 'Teste teste teste',
                    budget: 12345,
                    deadline: '2019-10-26T12:21:04.000Z',
                    selectedApplicationId: null,
                    createdAt: '2021-07-28T16:58:30.000Z',
                    updatedAt: '2021-07-28T16:58:30.000Z',
                    user_id: 1,
                    Hirer: {
                        id: 1,
                        name: 'Maria Aparecida',
                        description: null,
                        pic: null,
                        email: 'maria@email.com',
                        password:
                            '$2b$10$dkGcD.4Jwl8nxoF7RnYoJ.v75xm6fJprgXbzB7OV2NAin5OKVEta.',
                        createdAt: '2021-07-24T16:25:23.000Z',
                        updatedAt: '2021-07-24T16:25:23.000Z',
                    },
                    Skills: [
                        {
                            id: 1,
                            name: 'JavaScript',
                            jobs_skills: {
                                createdAt: '2021-07-28T16:58:30.000Z',
                                updatedAt: '2021-07-28T16:58:30.000Z',
                                job_id: 2,
                                SkillId: 1,
                            },
                        },
                        {
                            id: 2,
                            name: 'TypeScript',
                            jobs_skills: {
                                createdAt: '2021-07-28T16:58:30.000Z',
                                updatedAt: '2021-07-28T16:58:30.000Z',
                                job_id: 2,
                                SkillId: 2,
                            },
                        },
                        {
                            id: 3,
                            name: 'React',
                            jobs_skills: {
                                createdAt: '2021-07-28T16:58:30.000Z',
                                updatedAt: '2021-07-28T16:58:30.000Z',
                                job_id: 2,
                                SkillId: 3,
                            },
                        },
                    ],
                },
            ],
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
}
</script>

<style></style>
