import {CoreEventBus} from "../../core/eventBus";
import {ActivityLogStore} from "./activityLogStore";
import {ActivityComponent} from "./activityLogComponent";

export const ActivityFeature = (function () {
    function init() {

    // luister naar events van meerdere features
        CoreEventBus.subscribe("CART_ADD", p => {
            ActivityLogStore.addActivity(
                `Item toegevoegd: ${p.product.name}`
            );
        });
        CoreEventBus.subscribe("CART_REMOVE", p => {
            ActivityLogStore.addActivity(`Item verwijderd uit cart`);
        });
        CoreEventBus.subscribe("WISHLIST_ADD", p => {
            ActivityLogStore.addActivity(
                `Wishlist: ${p.product.name}`
            );
        });
        CoreEventBus.subscribe("CART_CLEAR", () => {
            ActivityLogStore.addActivity('Cart volledig geleegd')
        })
    // render bij updates
        CoreEventBus.subscribe("ACTIVITY_UPDATED", payload => {
            ActivityComponent.render(payload.entries);
        });
    // initial render
        ActivityComponent.render(ActivityLogStore.getEntries());
    }
    return {
        init
    };
})();
