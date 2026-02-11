import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Alert from "../src/components/Alert.vue"; // Ensure the path is correct

describe("<Alert>", () => {
    it('should render the correct html', () => {
        const wrapper = mount(Alert, {
            props: {
                type: "danger",
            },
            slots: {
                default: 'Hello'
            }
        });

        // Example assertion to check the output
        // expect(wrapper.html()).toContain('Hello');
        // expect(wrapper.classes()).toContain('alert-danger');
        expect(wrapper.html()).toMatchInlineSnapshot(`"<div class="alert alert-\${props.type}" role="alert">Hello<button aria-label="Close">×</button></div>"`);
    });
    it('should emit close when closing',  async() => {
        const wrapper = mount(Alert, {
            props: {
                type: "danger",
            },
            slots: {
                default: 'Hello'
            }
        });

        // Example assertion to check the output
        // expect(wrapper.html()).toContain('Hello');
        // expect(wrapper.classes()).toContain('alert-danger');
        await wrapper.get('[aria-label="Close"').trigger('click');
        expect(wrapper.emitted()).toHaveProperty("close");
        expect(wrapper.emitted().close).toHaveLength(1);
        console.log()
    });
});
