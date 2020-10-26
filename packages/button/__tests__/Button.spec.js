import Button from "../index";
import { mount } from '@vue/test-utils';
describe('test button', () => {
    describe('test props', () => {
        it('content', () => {
            const wrapper = mount(Button, {
                slots: {
                    default: '默认按钮'
                }
            })
            const textWrapper = mount(Button, {
                propsData: {
                    text: '默认按钮'
                }
            })
            expect(wrapper.text()).toBe('默认按钮')
            expect(textWrapper.text()).toBe('默认按钮')
        })
        it('test type', () => {
            const wrapper = mount(Button)
            const primaryWrapper = mount(Button, {
                propsData: {
                    type: 'primary'
                }
            })
            const warningWrapper = mount(Button, {
                propsData: {
                    type: 'warning'
                }
            })
            const dangerWrapper = mount(Button, {
                propsData: {
                    type: 'danger'
                }
            })
            expect(wrapper.classes()).toContain('sun-button-default')
            expect(primaryWrapper.classes()).toContain('sun-button-primary')
            expect(warningWrapper.classes()).toContain('sun-button-warning')
            expect(dangerWrapper.classes()).toContain('sun-button-danger')
        })
        it('test size', () => {
            const wrapper = mount(Button)
            const largeWrapper = mount(Button, {
                propsData: {
                    size: 'large'
                }
            })
            const smallWrapper = mount(Button, {
                propsData: {
                    size: 'small'
                }
            })
            expect(wrapper.classes()).toContain('sun-button-normal')
            expect(largeWrapper.classes()).toContain('sun-button-large')
            expect(smallWrapper.classes()).toContain('sun-button-small')
        })
        it('test disabled', () => {
            const wrapper = mount(Button)
            const disabledWrapper = mount(Button, {
                propsData: {
                    disabled: true
                }
            })
            expect(wrapper.classes()).not.toContain('sun-button-disabled')
            expect(disabledWrapper.classes()).toContain('sun-button-disabled')
        })
        it('test round', () => {
            const wrapper = mount(Button)
            const roundWrapper = mount(Button, {
                propsData: {
                    round: true
                }
            })
            expect(wrapper.classes()).not.toContain('sun-button-round')
            expect(roundWrapper.classes()).toContain('sun-button-round')
        })
        it('test animation', () => {
            const wrapper = mount(Button)
            const animationWrapper = mount(Button, {
                propsData: {
                    animation: true
                }
            })
            expect(wrapper.find('.sun-button-animation').exists()).toBe(false)
            expect(animationWrapper.find('.sun-button-animation').exists()).toBe(true)
        })
    })
    describe('test event', () => {
        it('test click', () => {
            const wrapper = mount(Button)
            wrapper.trigger('click')
            expect(wrapper.emitted().click).toBeTruthy()
        })
        it('test disabled click', () => {
            const wrapper = mount(Button, {
                propsData: {
                    disabled: true
                }
            })
            wrapper.trigger('click')
            expect(wrapper.emitted().click).toBeFalsy()
        })
        it('test touchStart', () => {
            const wrapper = mount(Button)
            wrapper.trigger('touchstart')
            expect(wrapper.emitted().touchstart).toBeTruthy()
        })
    })
})