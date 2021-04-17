import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";

import { TodoDetailContainer } from "./containers";

export const TodoDetailPage = defineComponent({
  name: "TodoDetailPage",
  components: { TodoDetailContainer },
  setup() {
    const route = useRoute();
    const todoId = ref(String(route.params["id"]));

    return () => <TodoDetailContainer todoId={todoId.value} />;
  },
});
