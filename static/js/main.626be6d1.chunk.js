(this["webpackJsonpwhid-pilot"]=this["webpackJsonpwhid-pilot"]||[]).push([[0],{197:function(e,t){},366:function(e,t,i){},388:function(e,t){},391:function(e,t,i){},400:function(e,t,i){"use strict";i.r(t);var n=i(0),o=i.n(n),a=i(116),r=i.n(a),s=(i(366),i(7)),l=i(16),c=i(121),d=i(451),h=i(36),u=i(441),g=i(435),m=(i(367),i(335)),b=i(453),p=i(273),f=i(323),j=i(269),w=i(459),y=i(3),v=new g.a,x={latitude:-33.8058087,longitude:150.9872926,zoom:16,pitch:60,bearing:0};Object(c.d)({username:"gsc-admin",apiKey:"default_public"});var O=new p.a({light1:new f.a({color:[255,255,255],intensity:1}),light2:new j.a({color:[255,255,255],intensity:2,direction:[-1,-2,-3],_shadow:!0})});O.shadowColor=[0,0,0,.3];var C={buildingColor:[232,232,247],material:{ambient:.2,diffuse:.6,shininess:32,specularColor:[232,232,247]},effects:[O]},k=function(){var e=Object(n.useState)(x),t=Object(l.a)(e,2),i=t[0],o=t[1],a=Object(n.useCallback)((function(){o((function(e){return Object(s.a)(Object(s.a)({},e),{},{bearing:e.bearing+.5,transitionDuration:500,transitionInterpolator:v,onTransitionEnd:a})}))}),[]),r=new d.a({id:"building",type:h.f.QUERY,data:"\n  SELECT the_geom_webmercator,maximum_roof_height as height,zones  FROM whid_gda94_building_polygon_whid where maximum_roof_height >0\n  ",getFillColor:C.buildingColor,getLineColor:C.buildingColor,elevationScale:3,lineWidthMinPixels:0,pickable:!0,filled:!0,extruded:!0,wireframe:!0,getElevation:function(e){return e.properties.height?e.properties.height:0}}),c=new u.a({id:"ground-layer",data:[[[150.01467801500007,-34.33741590599993],[150.01467801500007,-32.99606922299995],[151.3438999560001,-32.99606922299995],[151.3438999560001,-34.33741590599993],[150.01467801500007,-34.33741590599993]]],getPolygon:function(e){return e},stroked:!1,getFillColor:[0,0,0,0]}),g=(new d.a({id:"district",type:h.f.QUERY,data:'select the_geom_webmercator, district from "gsc-admin".districtboundary ',getFillColor:[0,0,0,0],getLineColor:[211,211,211],lineWidthMinPixels:1,pickable:!1}),new d.a({id:"precinct-layer",type:h.f.QUERY,data:"SELECT the_geom_webmercator,description from whid_gda94_westmead_health_precinct",lineWidthMinPixels:2,getFillColor:[0,0,0,0],getLineColor:[0,0,0],getDashArray:[3,2],dashJustified:!0,dashGapPickable:!0,extensions:[new w.a({dash:!0})]}));return Object(y.jsx)("div",{children:Object(y.jsx)(b.a,{width:"100%",height:"100%",controller:!0,viewState:i,layers:[c,r,g],onViewStateChange:function(e){return o(e.viewState)},getTooltip:function(e){var t=e.object;return t&&"zones: ".concat(t.properties.zones)},effects:C.effects,children:Object(y.jsx)(m.a,{reuseMaps:!0,mapStyle:"mapbox://styles/mapbox/light-v10",mapboxApiAccessToken:"pk.eyJ1IjoiYnNuYXlhbiIsImEiOiJja3Ewczd3MW4wN3Z3MnVvNDNsenlzNnFsIn0.f8nk8yrxIeCKOlzIy1b-Pg",preventStyleDiffing:!0})})})},_=(i(391),i(329)),I=i.n(_),E=i(312),L=i(313),F=i(457),P=Object(F.a)({paper:{width:"100%",height:"100%"},card:{backgroundColor:"blue"}});function S(e){return Object(y.jsxs)(E.a,{children:[Object(y.jsx)("h2",{children:e.item.name}),Object(y.jsx)("p",{children:e.item.description}),Object(y.jsx)(L.a,{className:"CheckButton",children:"Check it out!"})]})}var M=function(e){var t=P();return Object(y.jsx)(I.a,{className:t.paper,autoPlay:!1,children:[{name:"Page #1",description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."},{name:"Page #2",description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."}].map((function(e,t){return Object(y.jsx)(S,{item:e},t)}))})},N=function(){return Object(y.jsx)("div",{className:"layer-selector",style:{fontFamily:"Roboto, sans-serif"},children:Object(y.jsx)(M,{})})};var T=function(){return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)(k,{}),Object(y.jsx)(N,{})]})},z=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,460)).then((function(t){var i=t.getCLS,n=t.getFID,o=t.getFCP,a=t.getLCP,r=t.getTTFB;i(e),n(e),o(e),a(e),r(e)}))};r.a.render(Object(y.jsx)(o.a.StrictMode,{children:Object(y.jsx)(T,{})}),document.getElementById("root")),z()}},[[400,1,2]]]);
//# sourceMappingURL=main.626be6d1.chunk.js.map