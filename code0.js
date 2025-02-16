gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.GDBlackDecoratedButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDBlackDecoratedButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDBlackDecoratedButtonObjects3= [];
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton2Objects1= [];
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton2Objects2= [];
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton2Objects3= [];
gdjs.Untitled_32sceneCode.GDGPSDKObjects1= [];
gdjs.Untitled_32sceneCode.GDGPSDKObjects2= [];
gdjs.Untitled_32sceneCode.GDGPSDKObjects3= [];
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton3Objects1= [];
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton3Objects2= [];
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton3Objects3= [];
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton4Objects1= [];
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton4Objects2= [];
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton4Objects3= [];
gdjs.Untitled_32sceneCode.GDGPSDK2Objects1= [];
gdjs.Untitled_32sceneCode.GDGPSDK2Objects2= [];
gdjs.Untitled_32sceneCode.GDGPSDK2Objects3= [];
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton5Objects1= [];
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton5Objects2= [];
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton5Objects3= [];
gdjs.Untitled_32sceneCode.GDButtonBuyObjects1= [];
gdjs.Untitled_32sceneCode.GDButtonBuyObjects2= [];
gdjs.Untitled_32sceneCode.GDButtonBuyObjects3= [];
gdjs.Untitled_32sceneCode.GDbalanceObjects1= [];
gdjs.Untitled_32sceneCode.GDbalanceObjects2= [];
gdjs.Untitled_32sceneCode.GDbalanceObjects3= [];
gdjs.Untitled_32sceneCode.GDGPSDK3Objects1= [];
gdjs.Untitled_32sceneCode.GDGPSDK3Objects2= [];
gdjs.Untitled_32sceneCode.GDGPSDK3Objects3= [];


gdjs.Untitled_32sceneCode.userFunc0x104e640 = function GDJSInlineCode(runtimeScene) {
"use strict";
// Проверяем, что Telegram Web App API доступен
   if (window.Telegram && Telegram.WebApp) {
       // Создаем параметры для покупки
       const options = {
           title: "Название товара",
           description: "Описание товара",
           currency: "USD", // Валюта
           prices: [
               { label: "Цена", amount: "100" } // Сумма в центах (100 = 1 USD)
           ],
           photo_url: "https://example.com/photo.jpg", // URL фото товара
           need_name: true, // Запрашивать имя пользователя
           need_phone_number: true, // Запрашивать номер телефона
           need_shipping_address: true // Запрашивать адрес доставки
       };

       // Открываем окно покупки
       Telegram.WebApp.openInvoice(options, function(result) {
           if (result === "success") {
               // Покупка успешна
               alert("Покупка успешна!");
           } else {
               // Покупка отменена или произошла ошибка
               alert("Покупка отменена или произошла ошибка.");
           }
       });
   } else {
       alert("Telegram Web App API не доступен.");
   }

};
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.userFunc0x104e640(runtimeScene);

}


};gdjs.Untitled_32sceneCode.userFunc0x11794d0 = function GDJSInlineCode(runtimeScene) {
"use strict";
<script src="https://telegram.org/js/telegram-web-app.js"></script>
};
gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.Untitled_32sceneCode.userFunc0x11794d0(runtimeScene);

}


};gdjs.Untitled_32sceneCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ButtonBuy"), gdjs.Untitled_32sceneCode.GDButtonBuyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDButtonBuyObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDButtonBuyObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDButtonBuyObjects1[k] = gdjs.Untitled_32sceneCode.GDButtonBuyObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDButtonBuyObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButtonObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton2Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDGPSDKObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGPSDKObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGPSDKObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton3Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton4Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton4Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton4Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDGPSDK2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDGPSDK2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDGPSDK2Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton5Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton5Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton5Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDButtonBuyObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDButtonBuyObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDButtonBuyObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDbalanceObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDbalanceObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDbalanceObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDGPSDK3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDGPSDK3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDGPSDK3Objects3.length = 0;

gdjs.Untitled_32sceneCode.eventsList2(runtimeScene);
gdjs.Untitled_32sceneCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButtonObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton2Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDGPSDKObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGPSDKObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGPSDKObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton3Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton4Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton4Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton4Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDGPSDK2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDGPSDK2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDGPSDK2Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton5Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton5Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton5Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDButtonBuyObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDButtonBuyObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDButtonBuyObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDbalanceObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDbalanceObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDbalanceObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDGPSDK3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDGPSDK3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDGPSDK3Objects3.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
