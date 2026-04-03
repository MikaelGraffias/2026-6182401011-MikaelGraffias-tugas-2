System.register("chunks:///_virtual/Bird.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,i,r,n,o,a,l,s,p,c,u,d;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,r=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){o=e.cclegacy,a=e._decorator,l=e.SpriteFrame,s=e.Collider2D,p=e.Contact2DType,c=e.Vec3,u=e.Sprite,d=e.Component}],execute:function(){var h,v,g,f,B,m,y,b,C;o._RF.push({},"a636538ITtOGpLTjuv97Evs","Bird",void 0);var w=a.ccclass,z=a.property;e("Bird",(h=w("Bird"),v=z(l),g=z(l),f=z(l),h((y=t((m=function(e){function t(){for(var t,i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return t=e.call.apply(e,[this].concat(o))||this,r(t,"spriteBirdBiru",y,n(t)),r(t,"spriteBirdKuning",b,n(t)),r(t,"spriteBirdMerah",C,n(t)),t.level=1,t}i(t,e);var o=t.prototype;return o.start=function(){var e=this.getComponent(s);e&&e.on(p.BEGIN_CONTACT,this.onBeginContact,this),this.updateSprite()},o.onBeginContact=function(e,i,r){var n=e.node.getComponent(t),o=i.node.getComponent(t);n&&o?n.level===o.level&&n.level<3&&this.mergeWith(o):console.warn("Node tanpa Bird:",e.node.name,i.node.name)},o.mergeWith=function(e){if(e.node.isValid){e.node.active=!1,this.levelUp();var t=this.node.getWorldPosition(),i=e.node.getWorldPosition(),r=new c((t.x+i.x)/2,(t.y+i.y)/2,(t.z+i.z)/2);this.node.setWorldPosition(r),console.log(this.node.name+" merged with "+e.node.name+" to level "+this.level)}},o.levelUp=function(){if(this.level<3){this.level++;var e=this.node.getScale(),t=new c(1.3*e.x,1.3*e.y,e.z);this.node.setScale(t),this.updateSprite()}},o.updateSprite=function(){var e=this.getComponent(u);switch(this.level){case 1:e.spriteFrame=this.spriteBirdBiru;break;case 2:e.spriteFrame=this.spriteBirdKuning;break;case 3:e.spriteFrame=this.spriteBirdMerah}},t}(d)).prototype,"spriteBirdBiru",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=t(m.prototype,"spriteBirdKuning",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=t(m.prototype,"spriteBirdMerah",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=m))||B));o._RF.pop()}}}));

System.register("chunks:///_virtual/GameController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,r,n,i,a,l,c,s,p,u,y,f;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,r=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){i=t.cclegacy,a=t._decorator,l=t.Prefab,c=t.input,s=t.Input,p=t.instantiate,u=t.RigidBody2D,y=t.ERigidBody2DType,f=t.Component}],execute:function(){var d,h,g,m,b;i._RF.push({},"08c79LdCeRKlJjRB+mmzfSK","GameController",void 0);var v=a.ccclass,C=a.property;t("GameController",(d=v("GameController"),h=C({type:l}),d((b=e((m=function(t){function e(){for(var e,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return e=t.call.apply(t,[this].concat(i))||this,r(e,"birdPrefab",b,n(e)),e}o(e,t);var i=e.prototype;return i.start=function(){c.on(s.EventType.TOUCH_START,this.onTouchStart,this)},i.onTouchStart=function(t){console.log(t.getUILocation());var e=p(this.birdPrefab),o=t.getUILocation();e.setParent(this.node),e.setWorldPosition(o.x,o.y,0),e.getComponent(u).type=y.Dynamic,e.getComponent(u).wakeUp()},e}(f)).prototype,"birdPrefab",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=m))||g));i._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Bird.ts","./GameController.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});