export const LEDon = led_state =>({
    type:'LED_ON',
    led_state
});
export const LEDoff = led_state=>({
   type:'LED_OFF',
   led_state
});
export const BTConnect = bt_state=>({
   type:'BT_CONNECT',
   bt_state
});
export const BTDisConnect = bt_state=>({
    type:'BT_DISCONNECT',
    bt_state
});


