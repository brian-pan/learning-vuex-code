<template>
    <div>
        <h3>Todos</h3>
        <div class="todos">
            <div class="todo"></div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex' //mapGetters maps getters from vuex to our component

export default {
    name: "TodoList",
    computed: mapGetters(['allTodos']) // pass in array of getters we want to use
                                        // returns the state which has two todos
}
</script>

<style>

</style>