import Aside from "../src/pages/Aside.vue"
import { describe, it, expect, beforeEach } from "vitest";
import { flushPromises, mount } from "@vue/test-utils";
import { routes } from "@/Routes.js"
import { createMemoryHistory, createRouter } from "vue-router";


describe("<Aside>", () =>{

    let router;

    beforeEach(async () => {
        router = createRouter({
            history: createMemoryHistory(),
            routes: routes,
        });

        router.push("/");
        await router.isReady();
    })

    it("it should render html", async() => {
        const wrapper = mount(Aside, {
            global: {
                plugins: [router]
            }
        });
        expect(wrapper.html).toMatchInlineSnapshot(`[Function]`);

        router.push("/quiz")
        await router.isReady();
        await flushPromises();
        expect(wrapper.html()).toMatchInlineSnapshot(`
          "<aside>
            <nav>
              <ul>
                <li><a href="/" class="">home</a></li>
                <li><a href="/quiz" class="router-link-active router-link-exact-active" aria-current="page">Quiz</a></li>
                <li><a href="/about" class="">About</a></li>
              </ul>
            </nav>
          </aside>"
        `);
    });
})
