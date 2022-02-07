import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import gsap from 'gsap'
import {FontLoader} from "three/src/loaders/FontLoader";
import {TextGeometry} from "three/src/geometries/TextGeometry";

const gui = new dat.GUI()

const scene = new THREE.Scene()
const objects = new THREE.Group()
scene.add(objects)
// scene.background = new THREE.Color(0x4291ff)
const textureLoader = new THREE.TextureLoader()
scene.background = new THREE.CubeTextureLoader()
    .setPath( 'textures/okr/' )
    .load( [
        'px.png',
        'nx.png',
        'py.png',
        'ny.png',
        'pz.png',
        'nz.png'
    ] );



const cor_metallColorTexture = textureLoader.load('/textures/cor_metall/col.jpg')
const cor_metallAmbientOcclusionTexture = textureLoader.load('/textures/cor_metall/metall.jpg')
const cor_metallNormalTexture = textureLoader.load('/textures/cor_metall/norm.jpg')
const cor_metallRoughnessTexture = textureLoader.load('/textures/cor_metall/roug.jpg')
const corx = 4
const cory = 4
cor_metallColorTexture.repeat.set(corx,cory)
cor_metallAmbientOcclusionTexture.repeat.set(corx,cory)
cor_metallNormalTexture.repeat.set(corx,cory)
cor_metallRoughnessTexture.repeat.set(corx,cory)
cor_metallColorTexture.wrapS = THREE.RepeatWrapping
cor_metallAmbientOcclusionTexture.wrapS = THREE.RepeatWrapping
cor_metallNormalTexture.wrapS = THREE.RepeatWrapping
cor_metallRoughnessTexture.wrapS = THREE.RepeatWrapping
cor_metallColorTexture.wrapT = THREE.RepeatWrapping
cor_metallAmbientOcclusionTexture.wrapT = THREE.RepeatWrapping
cor_metallNormalTexture.wrapT = THREE.RepeatWrapping
cor_metallRoughnessTexture.wrapT = THREE.RepeatWrapping

const cor_metall = new THREE.MeshStandardMaterial({
    map: cor_metallColorTexture,
    metalnessMap: cor_metallAmbientOcclusionTexture,
    normalMap: cor_metallNormalTexture,
    roughnessMap: cor_metallRoughnessTexture,
    color: 0xa9a9a9})

const mramorColorTexture = textureLoader.load('/textures/mramor/col.jpg')
const mramorAmbientOcclusionTexture = textureLoader.load('/textures/mramor/aot.jpg')
const mramorNormalTexture = textureLoader.load('/textures/mramor/norm.jpg')
const mramorRoughnessTexture = textureLoader.load('/textures/mramor/roug.jpg')

mramorColorTexture.repeat.set(4,4)
mramorAmbientOcclusionTexture.repeat.set(4,4)
mramorNormalTexture.repeat.set(4,4)
mramorRoughnessTexture.repeat.set(4,4)
mramorColorTexture.wrapS = THREE.RepeatWrapping
mramorAmbientOcclusionTexture.wrapS = THREE.RepeatWrapping
mramorNormalTexture.wrapS = THREE.RepeatWrapping
mramorRoughnessTexture.wrapS = THREE.RepeatWrapping
mramorColorTexture.wrapT = THREE.RepeatWrapping
mramorAmbientOcclusionTexture.wrapT = THREE.RepeatWrapping
mramorNormalTexture.wrapT = THREE.RepeatWrapping
mramorRoughnessTexture.wrapT = THREE.RepeatWrapping

const verevkColorTexture = textureLoader.load('/textures/verevk/col.jpg')
const verevkAmbientOcclusionTexture = textureLoader.load('/textures/verevk/aot.jpg')
const verevkNormalTexture = textureLoader.load('/textures/verevk/norm.jpg')
const verevkRoughnessTexture = textureLoader.load('/textures/verevk/roug.jpg')

verevkColorTexture.repeat.set(2,8)
verevkAmbientOcclusionTexture.repeat.set(2,8)
verevkNormalTexture.repeat.set(2,8)
verevkRoughnessTexture.repeat.set(2,8)
verevkColorTexture.wrapS = THREE.RepeatWrapping
verevkAmbientOcclusionTexture.wrapS = THREE.RepeatWrapping
verevkNormalTexture.wrapS = THREE.RepeatWrapping
verevkRoughnessTexture.wrapS = THREE.RepeatWrapping
verevkColorTexture.wrapT = THREE.RepeatWrapping
verevkAmbientOcclusionTexture.wrapT = THREE.RepeatWrapping
verevkNormalTexture.wrapT = THREE.RepeatWrapping
verevkRoughnessTexture.wrapT = THREE.RepeatWrapping

const cletcColorTexture = textureLoader.load('/textures/cletc/col.jpg')
const cletcAmbientOcclusionTexture = textureLoader.load('/textures/cletc/aot.jpg')
const cletcNormalTexture = textureLoader.load('/textures/cletc/norm.png')
const cletcRoughnessTexture = textureLoader.load('/textures/cletc/roug.jpg')

cletcColorTexture.wrapS = THREE.RepeatWrapping
cletcAmbientOcclusionTexture.wrapS = THREE.RepeatWrapping
cletcNormalTexture.wrapS = THREE.RepeatWrapping
cletcRoughnessTexture.wrapS = THREE.RepeatWrapping
cletcColorTexture.wrapT = THREE.RepeatWrapping
cletcAmbientOcclusionTexture.wrapT = THREE.RepeatWrapping
cletcNormalTexture.wrapT = THREE.RepeatWrapping
cletcRoughnessTexture.wrapT = THREE.RepeatWrapping

const sharColorTexture = textureLoader.load('/textures/shar/col.jpg')
const sharAmbientOcclusionTexture = textureLoader.load('/textures/shar/aot.jpg')
const sharNormalTexture = textureLoader.load('/textures/shar/norm.jpg')
const sharRoughnessTexture = textureLoader.load('/textures/shar/roug.jpg')
const sharHeightTexture = textureLoader.load('/textures/shar/hei.png')

sharColorTexture.wrapS = THREE.RepeatWrapping
sharAmbientOcclusionTexture.wrapS = THREE.RepeatWrapping
sharNormalTexture.wrapS = THREE.RepeatWrapping
sharRoughnessTexture.wrapS = THREE.RepeatWrapping
sharHeightTexture.wrapS = THREE.RepeatWrapping

const holmColorTexture = textureLoader.load('/textures/holm/col.jpg')
const holmAmbientOcclusionTexture = textureLoader.load('/textures/holm/aot.jpg')
const holmNormalTexture = textureLoader.load('/textures/holm/norm.jpg')
const holmRoughnessTexture = textureLoader.load('/textures/holm/roug.jpg')
const holmGlossTexture = textureLoader.load('/textures/holm/gloss.jpg')

holmColorTexture.repeat.set(16,16)
holmAmbientOcclusionTexture.repeat.set(16,16)
holmNormalTexture.repeat.set(16,16)
holmRoughnessTexture.repeat.set(16,16)
holmGlossTexture.repeat.set(16,16)
holmColorTexture.wrapS = THREE.RepeatWrapping
holmAmbientOcclusionTexture.wrapS = THREE.RepeatWrapping
holmNormalTexture.wrapS = THREE.RepeatWrapping
holmRoughnessTexture.wrapS = THREE.RepeatWrapping
holmGlossTexture.wrapS = THREE.RepeatWrapping
holmColorTexture.wrapT = THREE.RepeatWrapping
holmAmbientOcclusionTexture.wrapT = THREE.RepeatWrapping
holmNormalTexture.wrapT = THREE.RepeatWrapping
holmRoughnessTexture.wrapT = THREE.RepeatWrapping
holmGlossTexture.wrapT = THREE.RepeatWrapping

const setcColorTexture = textureLoader.load('/textures/Setka/col.jpg')
const setcAmbientOcclusionTexture = textureLoader.load('/textures/Setka/aot.jpg')
const setcNormalTexture = textureLoader.load('/textures/Setka/norm.jpg')
const setcRoughnessTexture = textureLoader.load('/textures/Setka/roug.jpg')
const setcAlphaTexture = textureLoader.load('/textures/Setka/alpha.png')
const setcMetalnessTexture = textureLoader.load('/textures/Setka/metal.png')
const setcMaskTexture = textureLoader.load('/textures/Setka/mask.png')

setcColorTexture.repeat.set(8,8)
setcAmbientOcclusionTexture.repeat.set(8,8)
setcNormalTexture.repeat.set(8,8)
setcRoughnessTexture.repeat.set(8,8)
setcAlphaTexture.repeat.set(8,8)
setcMetalnessTexture.repeat.set(8,8)
setcMaskTexture.repeat.set(8,8)
setcColorTexture.wrapS = THREE.RepeatWrapping
setcAmbientOcclusionTexture.wrapS = THREE.RepeatWrapping
setcNormalTexture.wrapS = THREE.RepeatWrapping
setcRoughnessTexture.wrapS = THREE.RepeatWrapping
setcAlphaTexture.wrapS = THREE.RepeatWrapping
setcMetalnessTexture.wrapS = THREE.RepeatWrapping
setcMaskTexture.wrapS = THREE.RepeatWrapping
setcColorTexture.wrapT = THREE.RepeatWrapping
setcAmbientOcclusionTexture.wrapT = THREE.RepeatWrapping
setcNormalTexture.wrapT = THREE.RepeatWrapping
setcRoughnessTexture.wrapT = THREE.RepeatWrapping
setcAlphaTexture.wrapT = THREE.RepeatWrapping
setcMetalnessTexture.wrapT = THREE.RepeatWrapping
setcMaskTexture.wrapT = THREE.RepeatWrapping

const earthColorTexture = textureLoader.load('/textures/stone/col.jpg')
const earthAmbientOcclusionTexture = textureLoader.load('/textures/stone/aot.jpg')
const earthNormalTexture = textureLoader.load('/textures/stone/norm.jpg')
const earthRoughnessTexture = textureLoader.load('/textures/stone/roug.jpg')
const colich = 20
earthColorTexture.repeat.set(colich,colich)
earthAmbientOcclusionTexture.repeat.set(colich,colich)
earthNormalTexture.repeat.set(colich,colich)
earthRoughnessTexture.repeat.set(colich,colich)
earthColorTexture.wrapS = THREE.RepeatWrapping
earthAmbientOcclusionTexture.wrapS = THREE.RepeatWrapping
earthNormalTexture.wrapS = THREE.RepeatWrapping
earthRoughnessTexture.wrapS = THREE.RepeatWrapping
earthColorTexture.wrapT = THREE.RepeatWrapping
earthAmbientOcclusionTexture.wrapT = THREE.RepeatWrapping
earthNormalTexture.wrapT = THREE.RepeatWrapping
earthRoughnessTexture.wrapT = THREE.RepeatWrapping

const earth = new THREE.MeshLambertMaterial({
    map: earthColorTexture,
    aoMap: earthAmbientOcclusionTexture,
    normalMap: earthNormalTexture,
    roughnessMap: earthRoughnessTexture,
    //displacementMap: earthDisplacementTexture
})

const rzhavColorTexture = textureLoader.load('/textures/rzhav/col.jpg')
const rzhavNormalTexture = textureLoader.load('/textures/rzhav/norm.jpg')
const rzhavRoughnessTexture = textureLoader.load('/textures/rzhav/roug.jpg')

rzhavColorTexture.repeat.set(4,4)
rzhavNormalTexture.repeat.set(4,4)
rzhavRoughnessTexture.repeat.set(4,4)
rzhavColorTexture.wrapS = THREE.RepeatWrapping
rzhavNormalTexture.wrapS = THREE.RepeatWrapping
rzhavRoughnessTexture.wrapS = THREE.RepeatWrapping
rzhavColorTexture.wrapT = THREE.RepeatWrapping
rzhavNormalTexture.wrapT = THREE.RepeatWrapping
rzhavRoughnessTexture.wrapT = THREE.RepeatWrapping

const cepochColorTexture = textureLoader.load('/textures/cepoch/color.jpg')
const cepochNormalTexture = textureLoader.load('/textures/cepoch/norm.jpg')
const cepochRoughnessTexture = textureLoader.load('/textures/cepoch/roug.jpg')
const cepochAmbientOcclusionTexture = textureLoader.load('/textures/cepoch/aot.jpg')
const cepochMetallnessTexture = textureLoader.load('/textures/cepoch/metallic.jpg')
const cepochHeightTexture = textureLoader.load('/textures/cepoch/height.png')
const cepochOpacityTexture = textureLoader.load('/textures/cepoch/opacity.jpg')

const cepx = 16
const cepy = 1
cepochColorTexture.repeat.set(cepx,cepy)
cepochNormalTexture.repeat.set(cepx,cepy)
cepochRoughnessTexture.repeat.set(cepx,cepy)
cepochAmbientOcclusionTexture.repeat.set(cepx,cepy)
cepochMetallnessTexture.repeat.set(cepx,cepy)
cepochHeightTexture.repeat.set(cepx,cepy)
cepochOpacityTexture.repeat.set(cepx,cepy)
cepochColorTexture.wrapS = THREE.RepeatWrapping
cepochNormalTexture.wrapS = THREE.RepeatWrapping
cepochRoughnessTexture.wrapS = THREE.RepeatWrapping
cepochAmbientOcclusionTexture.wrapS = THREE.RepeatWrapping
cepochMetallnessTexture.wrapS = THREE.RepeatWrapping
cepochHeightTexture.wrapS = THREE.RepeatWrapping
cepochOpacityTexture.wrapS = THREE.RepeatWrapping
cepochColorTexture.wrapT = THREE.RepeatWrapping
cepochNormalTexture.wrapT = THREE.RepeatWrapping
cepochRoughnessTexture.wrapT = THREE.RepeatWrapping
cepochAmbientOcclusionTexture.wrapT = THREE.RepeatWrapping
cepochMetallnessTexture.wrapT = THREE.RepeatWrapping
cepochHeightTexture.wrapT = THREE.RepeatWrapping
cepochOpacityTexture.wrapT = THREE.RepeatWrapping


const cletc2ColorTexture = textureLoader.load('/textures/cletc/col.jpg')
const cletc2AmbientOcclusionTexture = textureLoader.load('/textures/cletc/aot.jpg')
const cletc2NormalTexture = textureLoader.load('/textures/cletc/norm.png')
const cletc2RoughnessTexture = textureLoader.load('/textures/cletc/roug.jpg')
cletc2ColorTexture.repeat.set(1,4)
cletc2AmbientOcclusionTexture.repeat.set(1,4)
cletc2NormalTexture.repeat.set(1,4)
cletc2RoughnessTexture.repeat.set(1,4)

cletc2ColorTexture.wrapS = THREE.RepeatWrapping
cletc2AmbientOcclusionTexture.wrapS = THREE.RepeatWrapping
cletc2NormalTexture.wrapS = THREE.RepeatWrapping
cletc2RoughnessTexture.wrapS = THREE.RepeatWrapping
cletc2ColorTexture.wrapT = THREE.RepeatWrapping
cletc2AmbientOcclusionTexture.wrapT = THREE.RepeatWrapping
cletc2NormalTexture.wrapT = THREE.RepeatWrapping
cletc2RoughnessTexture.wrapT = THREE.RepeatWrapping

const for_amerColorTexture = textureLoader.load('/textures/for_amer/col.jpg')
const for_amerAmbientOcclusionTexture = textureLoader.load('/textures/for_amer/aot.jpg')
const for_amerNormalTexture = textureLoader.load('/textures/for_amer/norm.jpg')
const for_amerRoughnessTexture = textureLoader.load('/textures/for_amer/roug.jpg')
const for_amerHeightTexture = textureLoader.load('/textures/for_amer/heigh.png')
const for_amer_cx = 2
const for_amer_cy = 2
for_amerColorTexture.repeat.set(for_amer_cx,for_amer_cy)
for_amerAmbientOcclusionTexture.repeat.set(for_amer_cx,for_amer_cy)
for_amerNormalTexture.repeat.set(for_amer_cx,for_amer_cy)
for_amerRoughnessTexture.repeat.set(for_amer_cx,for_amer_cy)
for_amerHeightTexture.repeat.set(for_amer_cx,for_amer_cy)
for_amerColorTexture.wrapS = THREE.RepeatWrapping
for_amerAmbientOcclusionTexture.wrapS = THREE.RepeatWrapping
for_amerNormalTexture.wrapS = THREE.RepeatWrapping
for_amerRoughnessTexture.wrapS = THREE.RepeatWrapping
for_amerHeightTexture.wrapS = THREE.RepeatWrapping
for_amerColorTexture.wrapT = THREE.RepeatWrapping
for_amerAmbientOcclusionTexture.wrapT = THREE.RepeatWrapping
for_amerNormalTexture.wrapT = THREE.RepeatWrapping
for_amerRoughnessTexture.wrapT = THREE.RepeatWrapping
for_amerHeightTexture.wrapT = THREE.RepeatWrapping

const blestColorTexture = textureLoader.load('/textures/blest/col.jpg')
const blestAmbientOcclusionTexture = textureLoader.load('/textures/blest/aot.jpg')
const blestNormalTexture = textureLoader.load('/textures/blest/norm.jpg')
const blestRoughnessTexture = textureLoader.load('/textures/blest/roug.jpg')
const blestHeightTexture = textureLoader.load('/textures/blest/hei.png')
const blestMetalnessTexture = textureLoader.load('/textures/blest/metall.jpg')

const waterColorTexture = textureLoader.load('/textures/water2/col.jpg')
const waterNormalTexture = textureLoader.load('/textures/water2/norm.jpg')
const waterRoughnessTexture = textureLoader.load('/textures/water2/roug.jpg')
const waterAlphaTexture = textureLoader.load('/textures/water2/alpha.jpg')
const waterMetalnessTexture = textureLoader.load('/textures/water2/metall.jpg')
const water_cx = 1
const water_cy = 1
waterColorTexture.repeat.set(water_cx,water_cy)
waterNormalTexture.repeat.set(water_cx,water_cy)
waterRoughnessTexture.repeat.set(water_cx,water_cy)
waterAlphaTexture.repeat.set(water_cx,water_cy)
waterMetalnessTexture.repeat.set(water_cx,water_cy)
waterColorTexture.wrapS = THREE.RepeatWrapping
waterNormalTexture.wrapS = THREE.RepeatWrapping
waterRoughnessTexture.wrapS = THREE.RepeatWrapping
waterAlphaTexture.wrapS = THREE.RepeatWrapping
waterMetalnessTexture.wrapS = THREE.RepeatWrapping
waterColorTexture.wrapT = THREE.RepeatWrapping
waterNormalTexture.wrapT = THREE.RepeatWrapping
waterRoughnessTexture.wrapT = THREE.RepeatWrapping
waterAlphaTexture.wrapT = THREE.RepeatWrapping
waterMetalnessTexture.wrapT = THREE.RepeatWrapping

const water = new THREE.MeshStandardMaterial( {
    map: waterColorTexture,
    normalMap: waterNormalTexture,
    aoMap: waterRoughnessTexture,
    alphaMap: waterAlphaTexture,
    metalnessMap: waterMetalnessTexture,
    transparent: true,
} );
const water2 = new THREE.MeshStandardMaterial( {
    map: waterColorTexture,
    normalMap: waterNormalTexture,
    aoMap: waterRoughnessTexture,
    alphaMap: waterAlphaTexture,
    metalnessMap: waterMetalnessTexture,
    transparent: true,
    color: 0xffffff
} );

const placticColorTexture = textureLoader.load('/textures/plastic/col.jpg')
const placticAmbientOcclusionTexture = textureLoader.load('/textures/plastic/aot.jpg')
const placticNormalTexture = textureLoader.load('/textures/plastic/norm.jpg')
const placticRoughnessTexture = textureLoader.load('/textures/plastic/roug.jpg')
const placticHeightTexture = textureLoader.load('/textures/plastic/heigh.png')
const plactic_cx = 8
const plactic_cy = 8
placticColorTexture.repeat.set(plactic_cx,plactic_cy)
placticAmbientOcclusionTexture.repeat.set(plactic_cx,plactic_cy)
placticNormalTexture.repeat.set(plactic_cx,plactic_cy)
placticRoughnessTexture.repeat.set(plactic_cx,plactic_cy)
placticHeightTexture.repeat.set(plactic_cx,plactic_cy)

placticColorTexture.wrapS = THREE.RepeatWrapping
placticAmbientOcclusionTexture.wrapS = THREE.RepeatWrapping
placticNormalTexture.wrapS = THREE.RepeatWrapping
placticRoughnessTexture.wrapS = THREE.RepeatWrapping
placticHeightTexture.wrapS = THREE.RepeatWrapping

placticColorTexture.wrapT = THREE.RepeatWrapping
placticAmbientOcclusionTexture.wrapT = THREE.RepeatWrapping
placticNormalTexture.wrapT = THREE.RepeatWrapping
placticRoughnessTexture.wrapT = THREE.RepeatWrapping
placticHeightTexture.wrapT = THREE.RepeatWrapping

const for_bassColorTexture = textureLoader.load('/textures/for_bass/col.jpg')
const for_bassAmbientOcclusionTexture = textureLoader.load('/textures/for_bass/aot.jpg')
const for_bassNormalTexture = textureLoader.load('/textures/for_bass/norm.jpg')
const for_bassRoughnessTexture = textureLoader.load('/textures/for_bass/roug.jpg')
const for_bassHeightTexture = textureLoader.load('/textures/for_bass/heigh.png')
const for_bassMetalnessTexture = textureLoader.load('/textures/for_bass/metall.jpg')
const for_bass_cx = 8
const for_bass_cy = 8
for_bassColorTexture.repeat.set(for_bass_cx,for_bass_cy)
for_bassAmbientOcclusionTexture.repeat.set(for_bass_cx,for_bass_cy)
for_bassNormalTexture.repeat.set(for_bass_cx,for_bass_cy)
for_bassRoughnessTexture.repeat.set(for_bass_cx,for_bass_cy)
for_bassHeightTexture.repeat.set(for_bass_cx,for_bass_cy)
for_bassMetalnessTexture.repeat.set(for_bass_cx,for_bass_cy)

for_bassColorTexture.wrapS = THREE.RepeatWrapping
for_bassAmbientOcclusionTexture.wrapS = THREE.RepeatWrapping
for_bassNormalTexture.wrapS = THREE.RepeatWrapping
for_bassRoughnessTexture.wrapS = THREE.RepeatWrapping
for_bassHeightTexture.wrapS = THREE.RepeatWrapping
for_bassMetalnessTexture.wrapS = THREE.RepeatWrapping

for_bassColorTexture.wrapT = THREE.RepeatWrapping
for_bassAmbientOcclusionTexture.wrapT = THREE.RepeatWrapping
for_bassNormalTexture.wrapT = THREE.RepeatWrapping
for_bassRoughnessTexture.wrapT = THREE.RepeatWrapping
for_bassHeightTexture.wrapT = THREE.RepeatWrapping
for_bassMetalnessTexture.wrapT = THREE.RepeatWrapping

const doorColorTexture = textureLoader.load('/textures/door/col.jpg')
const doorAlphaTexture = textureLoader.load('/textures/door/alpha.jpg')
const doorAmbientOcclusionTexture = textureLoader.load('/textures/door/aot.jpg')
const doorHeightTexture = textureLoader.load('/textures/door/heigh.jpg')
const doorNormalTexture = textureLoader.load('/textures/door/norm.jpg')
const doorMetalnessTexture = textureLoader.load('/textures/door/metall.jpg')
const doorRoughnessTexture = textureLoader.load('/textures/door/roug.jpg')


const kirpichColorTexture = textureLoader.load('/textures/kirpich/col.jpg')
const kirpichAmbientOcclusionTexture = textureLoader.load('/textures/kirpich/aot.jpg')
const kirpichNormalTexture = textureLoader.load('/textures/kirpich/norm.png')
const kirpichRoughnessTexture = textureLoader.load('/textures/kirpich/roug.jpg')
const kirpichGlossTexture = textureLoader.load('/textures/kirpich/gloss.jpg')
const kirpich_cx = 1
const kirpich_cy = 1
kirpichColorTexture.repeat.set(kirpich_cx,kirpich_cy)
kirpichAmbientOcclusionTexture.repeat.set(kirpich_cx,kirpich_cy)
kirpichNormalTexture.repeat.set(kirpich_cx,kirpich_cy)
kirpichRoughnessTexture.repeat.set(kirpich_cx,kirpich_cy)
kirpichGlossTexture.repeat.set(kirpich_cx,kirpich_cy)

kirpichColorTexture.wrapS = THREE.RepeatWrapping
kirpichAmbientOcclusionTexture.wrapS = THREE.RepeatWrapping
kirpichNormalTexture.wrapS = THREE.RepeatWrapping
kirpichRoughnessTexture.wrapS = THREE.RepeatWrapping
kirpichGlossTexture.wrapS = THREE.RepeatWrapping

kirpichColorTexture.wrapT = THREE.RepeatWrapping
kirpichAmbientOcclusionTexture.wrapT = THREE.RepeatWrapping
kirpichNormalTexture.wrapT = THREE.RepeatWrapping
kirpichRoughnessTexture.wrapT = THREE.RepeatWrapping
kirpichGlossTexture.wrapT = THREE.RepeatWrapping
const kirpich = new THREE.MeshLambertMaterial({
    map: kirpichColorTexture,
    aoMap: kirpichAmbientOcclusionTexture,
    normalMap: kirpichNormalTexture,
    roughnessMap: kirpichRoughnessTexture,
    //bumpMap: kirpichBumpTexture,
})


var cats = ["1", "2", "3"]
var randomIndex = Math.floor(Math.random() * 3)
var p1 = cats[randomIndex]
var myIndex = cats.indexOf(p1)
if (myIndex !== -1) {cats.splice(myIndex, 1)}
var randomIndex2 = Math.floor(Math.random() * 2)
var p2 = cats[randomIndex2]


// _____________КОЛЕСО ОБОЗРЕНИЯ__________________
const shirina = 8
const obzor_circle = new THREE.Group()
const obzor_stoika = new THREE.Group()
const coleso_obzor = new THREE.Group()
const budki = new THREE.Group()
objects.add(coleso_obzor)

coleso_obzor.add(budki)
coleso_obzor.add(obzor_circle)
coleso_obzor.add(obzor_stoika)
budki.position.z = -4
// coleso_obzor.position.z = -30
coleso_obzor.position.y = 0
obzor_circle.position.y = 52
obzor_stoika.position.y = 52
budki.position.y = 52


const coleso_cvet1 = new THREE.MeshStandardMaterial({
    map: cor_metallColorTexture,
    metalnessMap: cor_metallAmbientOcclusionTexture,
    normalMap: cor_metallNormalTexture,
    roughnessMap: cor_metallRoughnessTexture,
    color: 0x44aa88})

for (let i = 1; i < 3; i++) {
    var radius = 40
    if (i == 2) {radius = radius*0.66;}
    else if (i == 3) {radius = radius*0.17;}
    for (let j = 0; j < 2; j++) {
        const obzor_co = new THREE.Mesh(
            new THREE.TorusGeometry(radius, 0.8, 64, 64),
            coleso_cvet1
        )
        obzor_co.castShadow = true
        obzor_co.position.z = -j*shirina
        obzor_circle.add(obzor_co)
    }
}

for (let i = 0; i < 2; i++) {
    const circle_cylinder2 = new THREE.Mesh(
        new THREE.CylinderGeometry(6, 6, 3, 16),
        coleso_cvet1
    )
    circle_cylinder2.castShadow = true
    circle_cylinder2.position.z = -shirina*i
    circle_cylinder2.rotation.x = Math.PI / 2
    obzor_circle.add(circle_cylinder2)
}


for (let j = 1; j < 3; j++) {
    var height = 40*0.66
    if (j == 2) {height = height/0.66;}
    for (let i = 1; i < (8*j + 1); i++) {
        const obzor_osn = new THREE.Mesh(
            new THREE.CylinderGeometry(0.8, 0.8, shirina, 16),
            coleso_cvet1
        )
        obzor_osn.position.z = -shirina/2
        obzor_osn.position.y = height * Math.sin(2 * Math.PI * i / (8*j))
        obzor_osn.position.x = height * Math.cos(2 * Math.PI * i / (8*j))
        obzor_osn.rotation.x = Math.PI / 2
        obzor_osn.castShadow = true
        obzor_circle.add(obzor_osn)
    }
}

for (let j = 0; j < 2; j++) {
    for (let i = 0; i < 5; i++) {
        const obzor_osn2 = new THREE.Mesh(
            new THREE.CylinderGeometry(0.8, 0.8, 80, 16),
            coleso_cvet1
        )
        obzor_osn2.position.z = -shirina*j
        obzor_osn2.rotation.z = Math.PI * i / 4
        obzor_osn2.castShadow = true
        obzor_circle.add(obzor_osn2)
    }
}
// Стойка колеса обозрения
const circle_cylinder = new THREE.Mesh(
    new THREE.CylinderGeometry(3, 3, shirina+4, 16),
    new THREE.MeshStandardMaterial({
        map: rzhavColorTexture,
        normalMap: rzhavNormalTexture,
        roughnessMap: rzhavRoughnessTexture,})
)
circle_cylinder.position.z = -shirina/2
circle_cylinder.rotation.x = Math.PI/2
circle_cylinder.castShadow = true
obzor_stoika.add(circle_cylinder)

const coleso_cvet2 = new THREE.MeshStandardMaterial({
    map: cor_metallColorTexture,
    metalnessMap: cor_metallAmbientOcclusionTexture,
    normalMap: cor_metallNormalTexture,
    roughnessMap: cor_metallRoughnessTexture,
    color: 0xa9a9a9})

for (let j = 0; j < 2; j++) {
    const position = -14.4*j
    for (let i = 0; i < 2; i++) {
        const obzor_balk1 = new THREE.Mesh(
            new THREE.CylinderGeometry(1.2, 1.8, 68, 16),
            coleso_cvet2
        )
        obzor_balk1.position.y = -28
        obzor_balk1.position.x = 17 - i * 34
        obzor_balk1.position.z = 3.2 + position
        obzor_balk1.rotation.z = Math.PI / 6 - i * Math.PI / 3
        obzor_balk1.castShadow = true
        obzor_stoika.add(obzor_balk1)
    }
    const obzor_cylinder2 = new THREE.Mesh(
        new THREE.CylinderGeometry(4, 4, 4, 16),
        coleso_cvet2
    )
    obzor_cylinder2.position.z = 4 -16*j
    obzor_cylinder2.rotation.x = Math.PI/2
    obzor_cylinder2.castShadow = true
    obzor_stoika.add(obzor_cylinder2)
}

for (let i = 0; i < 2; i++) {
    const obzor_balk2 = new THREE.Mesh(
        new THREE.CylinderGeometry(1.2, 1.8, 68, 16),
        coleso_cvet2
    )
    obzor_balk2.position.y = -28
    obzor_balk2.position.z = 20 - 48.2*i
    obzor_balk2.rotation.x = -Math.PI / 6 + i * Math.PI / 3
    obzor_balk2.castShadow = true
    obzor_stoika.add(obzor_balk2)
}

// Земля
const zemla = new THREE.Mesh(
    new THREE.CircleGeometry(400, 32),
    //earth
    new THREE.MeshLambertMaterial({
        map: holmColorTexture,
        aoMap: holmAmbientOcclusionTexture,
        normalMap: holmNormalTexture,
        roughnessMap: holmRoughnessTexture,
        //bumpMap: holmBumpTexture,
        //displacementMap: holmDisplacementTexture,
    })
)
zemla.rotation.x = -Math.PI/2
zemla.receiveShadow = true
objects.add(zemla)

const colesob_cvet1 = new THREE.MeshLambertMaterial({
    map: cletcColorTexture,
    aoMap: cletcAmbientOcclusionTexture,
    normalMap: cletcNormalTexture,
    roughnessMap: cletcRoughnessTexture,
    //bumpMap:cletcBumpTexture,
    //displacementMap: cletcDisplacementTexture,
    color: 0xff0000,
    wireframe: true})

const colesob_cvet2 = new THREE.MeshLambertMaterial({
    map: cletcColorTexture,
    aoMap: cletcAmbientOcclusionTexture,
    normalMap: cletcNormalTexture,
    roughnessMap: cletcRoughnessTexture,
    //bumpMap:cletcBumpTexture,
    //displacementMap: cletcDisplacementTexture,
    wireframe: true})

const colesob_cvet3 = new THREE.MeshStandardMaterial({
    map: mramorColorTexture,
    aoMap: mramorAmbientOcclusionTexture,
    normalMap: mramorNormalTexture,
    roughnessMap: mramorRoughnessTexture,
    color: 0xffff00})

// Будка
var bukis = []
for (let i = 1; i < 17; i++) {
    const budka = new THREE.Group()
    const budka_osnov = new THREE.Mesh(
        new THREE.CylinderGeometry(
            3, 3, 6,
            64, 64,
            false,
            -Math.PI, Math.PI),
        colesob_cvet1
    )
    const budka_verh = new THREE.Mesh(
        new THREE.ConeGeometry(
            3, 4,
            64, 64,
            true),
        colesob_cvet2
    )

    const budka_palk = new THREE.Mesh(
        new THREE.CylinderGeometry(0.3, 0.3, 11, 16),
        colesob_cvet3
    )
    const budka_palk2 = new THREE.Mesh(
        new THREE.CylinderGeometry(1, 1, 0.5, 16),
        colesob_cvet3
    )
    budka_osnov.rotation.y = Math.PI / 2
    budka_osnov.rotation.z = Math.PI / 2
    budka_osnov.position.y = -7
    budka_verh.position.y = -3
    budka_palk.position.y = -5
    budka_palk2.position.y = -10.3
    budka.add(budka_osnov)
    budka.add(budka_verh)
    budka.add(budka_palk)
    budka.add(budka_palk2)
    budka.position.y = height * Math.sin(2 * Math.PI * i / (16))
    budka.position.x = height * Math.cos(2 * Math.PI * i / (16))
    budki.add(budka)
    budka_osnov.castShadow = true
    budka_verh.castShadow = true
    budka_palk.castShadow = true
    budka_palk2.castShadow = true
    bukis[i-1] = budka
}

// _____________КОЛЕСО ОБОЗРЕНИЯ --- АНИМАЦИЯ__________________
function coleso_animation() {
    const coleso_duration = 40
    gsap.to(budki.rotation, {
        z: Math.PI*2,
        ease: "none",
        duration: coleso_duration,
        repeat: -1
    })
    for (let i = 0; i < 16; i++) {
        gsap.to(bukis[i].rotation, {
            z: -Math.PI*2,
            ease: "none",
            duration: coleso_duration,
            repeat: -1
        })
    }
    gsap.to(obzor_circle.rotation, {
        z: Math.PI*2,
        ease: "none",
        duration: coleso_duration,
        repeat: -1
    })
}
coleso_animation();

// _____________АМЕРИКАНСКИЕ ГОРКИ_____________
const american_gorka = new THREE.Group()
const american_doroga = new THREE.Group()
const vagonchik = new THREE.Group()
objects.add(american_gorka)

american_gorka.add(american_doroga)
american_gorka.add(vagonchik)
american_gorka.position.x = 80
american_gorka.position.z = -60
const pipeSpline = new THREE.CatmullRomCurve3( [
    new THREE.Vector3( 0, 70, 0 ), new THREE.Vector3( 0, 50, 0 ),
    new THREE.Vector3( 0, 45, 0 ),
    new THREE.Vector3( 10, 30, 0 ), new THREE.Vector3( 50, 30, -2 ),
    new THREE.Vector3( 60, 35, -2 ), new THREE.Vector3( 70, 45, -4 ),
    new THREE.Vector3( 75, 55, -6 ), new THREE.Vector3( 75, 65, -8 ),
    new THREE.Vector3( 65, 75, -10 ), new THREE.Vector3( 50, 80, -12 ),
    new THREE.Vector3( 35, 72, -14 ), new THREE.Vector3( 33, 52, -16 ),
    new THREE.Vector3( 50, 30, -18 ), new THREE.Vector3( 70, 30, -20 ),
    new THREE.Vector3( 90, 40, -40 ), new THREE.Vector3( 90, 40, -60 ),
    new THREE.Vector3( 80, 50, -80 ), new THREE.Vector3( 60, 60, -80 ),
    new THREE.Vector3( 50, 70, -70 ), new THREE.Vector3( 50, 35, 20 ),
    new THREE.Vector3( 50, 42, 40 ),
    new THREE.Vector3( 50, 46, 40 ), new THREE.Vector3( 50, 70, 40 ),
] );

const params = {
    spline: 'pipSpline',
    scale: 16,
    extrusionSegments: 240,
    radiusSegments: 16,
    closed: false,
    animationView: false,
    lookAhead: false,
    cameraHelper: false,
};
const american_cvetd = new THREE.MeshStandardMaterial({
    map: cepochColorTexture,
    aoMap: cepochAmbientOcclusionTexture,
    normalMap: cepochNormalTexture,
    roughnessMap: cepochRoughnessTexture,
    metalnessMap: cepochMetallnessTexture,
    //displacementMap: cepochHeightTexture,
    alphaMap: cepochOpacityTexture,
    transparent: true})

const doroga = new THREE.Mesh(
    new THREE.TubeGeometry( pipeSpline, params.extrusionSegments, 4.5, params.radiusSegments, params.closed),
    american_cvetd
    )
doroga.castShadow = true
doroga.position.y = -10
doroga.position.x = 0
doroga.position.z = -20
american_doroga.add( doroga );
const vagonchik_osnovn = new THREE.Group()
const vagonchik_osnov = new THREE.Group()
const american_cvet1 = new THREE.MeshStandardMaterial({
    map: blestColorTexture,
    aoMap: blestAmbientOcclusionTexture,
    normalMap: blestNormalTexture,
    roughnessMap: blestRoughnessTexture,
    metalnessMap: blestMetalnessTexture,
    //displacementMap: blestHeightTexture,
})

const vagonchik_osnov1 = new THREE.Mesh(
    new THREE.SphereGeometry(4,16,16),
    american_cvet1
)
vagonchik_osnovn.add(vagonchik_osnov1)
vagonchik_osnov1.castShadow = true
vagonchik_osnov.position.set(0,-10,-20)
vagonchik.position.set(0,70,0)
vagonchik_osnovn.rotation.z = Math.PI/6
vagonchik_osnov.add(vagonchik_osnovn)
vagonchik.add(vagonchik_osnov)

const american_cvetv2 = new THREE.MeshStandardMaterial({
    map: for_amerColorTexture,
    aoMap: for_amerAmbientOcclusionTexture,
    normalMap: for_amerNormalTexture,
    roughnessMap: for_amerRoughnessTexture,
    //displacementMap: for_amerHeightTexture,
    // displacementScale: 0.1,
})

for (let i = 0; i < 2; i++) {
    const vhod1 = new THREE.Mesh(
        new THREE.CylinderGeometry(5, 5, 20, 16, 16, true),
        american_cvetv2
    )
    vhod1.position.y = 50
    vhod1.castShadow = true
    vhod1.position.x = i*50
    vhod1.position.z = -20 +i*40
    american_doroga.add(vhod1);

    const vhod11 = new THREE.Mesh(
        new THREE.CylinderGeometry(5, 5, 20, 16, 16, true),
        american_cvetv2
    )
    vhod11.castShadow = true
    vhod11.position.y = 60
    vhod11.position.x = -10 +i*50
    vhod11.position.z = -20 +i*40
    vhod11.rotation.z = Math.PI / 2
    american_doroga.add(vhod11);

    const vhod12 = new THREE.Mesh(
        new THREE.SphereGeometry(5, 16, 16),
        american_cvetv2
    )
    vhod12.castShadow = true
    vhod12.position.y = 60
    vhod12.position.x = i*50
    vhod12.position.z = -20 +i*40
    vhod12.rotation.x = Math.PI / 2
    american_doroga.add(vhod12);

    const vhod13 = new THREE.Mesh(
        new THREE.CylinderGeometry(5, 5, 60, 16, 16, true),
        american_cvetv2
    )
    vhod13.castShadow = true
    vhod13.position.y = 30
    vhod13.position.x = -20+i*50
    vhod13.position.z = -20 +i*40
    american_doroga.add(vhod13);

    const vhod14 = new THREE.Mesh(
        new THREE.SphereGeometry(5, 16, 16),
        american_cvetv2
    )
    vhod14.castShadow = true
    vhod14.position.y = 60
    vhod14.position.x = -20 + i*50
    vhod14.position.z = -20 +i*40
    vhod14.rotation.x = Math.PI / 2
    american_doroga.add(vhod14);
}

const vhod15 = new THREE.Mesh(
    new THREE.CylinderGeometry(5,5, 64,16,16,true),
    american_cvetv2
)
vhod15.castShadow = true
vhod15.position.y = 60
vhod15.position.x = 25
vhod15.position.z = 0
vhod15.rotation.y = -Math.PI/4.66
vhod15.rotation.z = Math.PI/2
american_doroga.add( vhod15 );

const american_cvetb = new THREE.MeshStandardMaterial({
    map: cor_metallColorTexture,
    metalnessMap: cor_metallAmbientOcclusionTexture,
    normalMap: cor_metallNormalTexture,
    roughnessMap: cor_metallRoughnessTexture,
    color: 0xa9a9a9})

const american_balk1 = new THREE.Mesh(
    new THREE.CylinderGeometry(3, 5, 25.49, 16),
    american_cvetb)
american_balk1.position.y = 12.52
american_balk1.position.x = 91.5
american_balk1.position.z = -73
american_balk1.castShadow = true
american_doroga.add(american_balk1)

const american_balk2 = new THREE.Mesh(
    new THREE.CylinderGeometry(3, 5, 55.49, 16),
    american_cvetb
)
american_balk2.position.y = 27.745
american_balk2.position.x = 49.5
american_balk2.position.z = -88
american_balk2.castShadow = true
american_doroga.add(american_balk2)

const american_balk3 = new THREE.Mesh(
    new THREE.CylinderGeometry(3, 5, 13, 16),
    american_cvetb
)
american_balk3.position.y = 6.5
american_balk3.position.x = 30
american_balk3.position.z = -21
american_balk3.castShadow = true
american_doroga.add(american_balk3)

const american_balk4 = new THREE.Mesh(
    new THREE.CylinderGeometry(3, 5, 20.5, 16),
    american_cvetb
)
american_balk4.position.y = 10.25
american_balk4.position.x = 50
american_balk4.position.z = 0
american_balk4.castShadow = true
american_doroga.add(american_balk4)

const dver_color =new THREE.MeshStandardMaterial({
    map: doorColorTexture,
    transparent: true,
    alphaMap: doorAlphaTexture,
    aoMap: doorAmbientOcclusionTexture,
    // displacementMap: doorHeightTexture,
    // displacementScale: 0.1,
    normalMap: doorNormalTexture,
    metalnessMap: doorMetalnessTexture,
    roughnessMap: doorRoughnessTexture,
})
const dver_figure = new THREE.CylinderGeometry(5.07,5.07,14,14,16, true, -Math.PI/3, Math.PI/1.5)

const dver = new THREE.Mesh(dver_figure, dver_color)
dver.position.set(-20, 6.8, -20)
dver.rotation.y = -Math.PI/3
american_doroga.add(dver)

const dver2 = new THREE.Mesh(dver_figure, dver_color)
dver2.position.set(30, 6.8, 20)
dver2.rotation.y = -Math.PI/3
american_doroga.add(dver2)

// ___________АМЕРИКАНСКИЕ ГОРКИ --- АНИМАЦИЯ______________
const points = pipeSpline.getPoints( 240 )
var ob = 1
var a = 1
function gorki_animation() {
    const gorki_duration = 0.1
    gsap.to(vagonchik.position, {
        x: points[ob].x,
        y: points[ob].y,
        z: points[ob].z,
        duration: gorki_duration,
        ease: "none",

        onComplete: function () {

            if (ob <= 239 && ob >= 1) {
                ob += a
                gorki_animation2()
                gorki_animation()}
            else {ob = 1
                gorki_animation2()
                gorki_animation()
            }
        }
    })
}
gorki_animation();

function gorki_animation2() {
    vagonchik_osnov.rotation.z = VectorAngle(points[ob - a].x, points[ob].x, points[ob - a].y, points[ob].y)
    vagonchik_osnov.rotation.x = VectorAngle(points[ob - a].z, points[ob].z, points[ob - a].y, points[ob].y)
    vagonchik_osnov.rotation.y = VectorAngle(points[ob - a].x, points[ob].x, points[ob - a].z, points[ob].zy)
}
// _______________ КАРУСЕЛЬ _______________
const carusel = new THREE.Group()

const carusel_osnovanie = new THREE.Group()
const carusel_mesta = new THREE.Group()
objects.add(carusel)
carusel.add(carusel_osnovanie)
carusel.add(carusel_mesta)
// Основание карусели
const carusel_cveto = new THREE.MeshStandardMaterial({
    map: mramorColorTexture,
    aoMap: mramorAmbientOcclusionTexture,
    normalMap: mramorNormalTexture,
    roughnessMap: mramorRoughnessTexture,})

const carusel_osnovanie1 = new THREE.Mesh(
    new THREE.CylinderGeometry(4,4,120,16,16),
    carusel_cveto
)
carusel_osnovanie1.castShadow = true
carusel_osnovanie1.position.y = 60
carusel_osnovanie.add(carusel_osnovanie1)

const carusel_osnovanie2 = new THREE.Mesh(
    new THREE.SphereGeometry(32,16,16, 0,Math.PI*2,-Math.PI/5,Math.PI/2.5),
    new THREE.MeshLambertMaterial({
        map: holmColorTexture,
        aoMap: holmAmbientOcclusionTexture,
        normalMap: holmNormalTexture,
        roughnessMap: holmRoughnessTexture,
        // bumpMap: holmBumpTexture,
        // displacementMap: holmDisplacementTexture,
    })
)
carusel_osnovanie2.castShadow = true
carusel_osnovanie2.receiveShadow = true
carusel_osnovanie2.position.y = -28
carusel_osnovanie.add(carusel_osnovanie2)

const carusel_cvets = new THREE.MeshStandardMaterial({
    map: sharColorTexture,
    metalnessMap: sharAmbientOcclusionTexture,
    normalMap: sharNormalTexture,
    roughnessMap: sharRoughnessTexture,
    //displacementMap: sharHeightTexture
})

const carusel_osnovanie3 = new THREE.Mesh(
    new THREE.SphereGeometry(8,16,16),
    carusel_cvets
)


carusel_osnovanie3.castShadow = true
carusel_osnovanie3.position.y = 127
carusel_osnovanie.add(carusel_osnovanie3)

//Карусель движущиеся предметы
var ugol = Math.PI/2

const carusel_cvetm1 = new THREE.MeshStandardMaterial({
    map: cor_metallColorTexture,
    metalnessMap: cor_metallAmbientOcclusionTexture,
    normalMap: cor_metallNormalTexture,
    roughnessMap: cor_metallRoughnessTexture,})

const carusel_mest_osnov = new THREE.Mesh(
    new THREE.CylinderGeometry(6,6,4,16,16),
    carusel_cvetm1
)
carusel_mest_osnov.castShadow = true
carusel_mest_osnov.position.y = 6 + 8*Math.cos(ugol) + 113*Math.cos(ugol)
carusel_mesta.add(carusel_mest_osnov)

const carusel_mest_budki = new THREE.Group()
const carusel_mest_palki = new THREE.Group()
const carusel_mest_spinki = new THREE.Group()
const carusel_mestos = []
carusel_mesta.add(carusel_mest_palki)
carusel_mesta.add(carusel_mest_budki)
carusel_mesta.add(carusel_mest_spinki)

const carusel_cvetsid = new THREE.MeshLambertMaterial({
    map: cletcColorTexture,
    aoMap: cletcAmbientOcclusionTexture,
    normalMap: cletcNormalTexture,
    roughnessMap: cletcRoughnessTexture,
    // bumpMap:cletcBumpTexture,
    // displacementMap: cletcDisplacementTexture,
    // displacementScale: 0.1
} )

for (let i = 0; i < 16; i++) {
    const carusel_mesto = new THREE.Group()
    const carusel_mest_palka = new THREE.Mesh(
        new THREE.CylinderGeometry(0.2, 0.2, 20, 16, 16),
        new THREE.MeshLambertMaterial({
            map: verevkColorTexture,
            aoMap: verevkAmbientOcclusionTexture,
            normalMap: verevkNormalTexture,
            roughnessMap: verevkRoughnessTexture,
        })
    )
    carusel_mest_palka.castShadow = true
    const carusel_mest_budka = new THREE.Mesh(
        new THREE.SphereGeometry(1, 64, 64, -Math.PI, 6*Math.PI/4),
        carusel_cvetsid

    )
    carusel_mest_budka.castShadow = true
    const carusel_mest_spinka = new THREE.Mesh(
        new THREE.CircleGeometry(1, 64),
        carusel_cvetsid
    )
    carusel_mest_spinka.castShadow = true
    const carusel_mest_sedush = new THREE.Mesh(
        new THREE.CircleGeometry(1, 64),
        carusel_cvetsid
    )
    carusel_mest_sedush.castShadow = true
    carusel_mest_palka.position.y = -10
    carusel_mest_budka.position.y = -21
    carusel_mest_spinka.position.y = -21
    carusel_mest_sedush.position.y = -21
    carusel_mest_budka.rotation.x = Math.PI/2
    carusel_mest_sedush.rotation.x = Math.PI/2
    carusel_mest_spinka.rotation.x = Math.PI/2
    carusel_mest_sedush.rotation.y = Math.PI/2
    carusel_mesto.add(carusel_mest_spinka, carusel_mest_budka, carusel_mest_palka, carusel_mest_sedush)

    // var axisHelper = new THREE.AxisHelper(40)
    // carusel_mesto.add(axisHelper)

    carusel_mestos[i] = carusel_mesto
    carusel_mesta.add(carusel_mesto)
}
for (let i = 0; i < 16; i++) {
    carusel_mestos[i].position.x = 6 * Math.cos( 2*Math.PI * i / (16))
    carusel_mestos[i].position.z = 6 * Math.sin( 2*Math.PI * i / (16))
    carusel_mestos[i].position.y = 6
    carusel_mestos[i].rotation.y = (i)*Math.PI/8 -(i%8)*Math.PI/4
    carusel_mestos[i].rotation.z = ugol
}
// ____________КАРУСЕЛЬ --- АНИМАЦИЯ___________
var for_c = 16
var for_y = 113
const easing = "bounce.inOut"
const durating = 15
function carusel_animation() {
    for (let i = 0; i < 16; i++) {
        new gsap.timeline({repeat: -1, yoyo: true})
            .to(carusel_mestos[i].position, {
                y: 6 + 7 * Math.cos(Math.PI / 8) + for_y * Math.cos(Math.PI / 8),
                duration: durating,
                ease: easing,
            })
            .to(carusel_mesta.rotation, {
                y: 2 * Math.PI,
                duration: 10,
                ease: "power1.inOut",
            })
            .to(carusel_mestos[i].position, {
                y: 6 + 7 * Math.cos(Math.PI / 4) + for_y * Math.cos(Math.PI / 4),
                duration: 2,
                ease: "power1.inOut",
            })
            .to(carusel_mestos[i].position, {
                y: 6 + 7 * Math.cos(Math.PI / 8) + for_y * Math.cos(Math.PI / 8),
                duration: 2,
                ease: "power1.inOut",
            })
            .to(carusel_mestos[i].position, {
                y: 6 + 7 * Math.cos(Math.PI / 2) + for_y * Math.cos(Math.PI / 2),
                duration: durating,
                ease: easing,
            })
    }
    for (let i = 0; i < 16; i++) {
        new gsap.timeline({repeat: -1, yoyo: true})
            .to(carusel_mestos[i].rotation, {
                z: Math.PI / 8,
                duration: durating,
                ease: easing,
            })
            .to(carusel_mesta.rotation, {
                y: 2 * Math.PI,
                duration: 10,
                ease: "power1.inOut",
            })
            .to(carusel_mestos[i].rotation, {
                z: Math.PI / 4,
                duration: 2,
                ease: "power1.inOut",
            })
            .to(carusel_mestos[i].rotation, {
                z: Math.PI / 8,
                duration: 2,
                ease: "power1.inOut",
            })
            .to(carusel_mestos[i].rotation, {
                z: Math.PI / 2,
                duration: durating,
                ease: easing,
            })

    }
    new gsap.timeline({repeat: -1, yoyo: true})
        .to(carusel_mest_osnov.position, {
            y: 6 + 7 * Math.cos(Math.PI / 8) + for_y * Math.cos(Math.PI / 8),
            duration: durating,
            ease: easing,
        })
        .to(carusel_mest_osnov.rotation, {
            y: 2 * Math.PI,
            duration: 10,
            ease: "power1.inOut",
        })
        .to(carusel_mest_osnov.position, {
            y: 6 + 7 * Math.cos(Math.PI / 4) + for_y * Math.cos(Math.PI / 4),
            duration: 2,
            ease: "power1.inOut",
        })
        .to(carusel_mest_osnov.position, {
            y: 6 + 7 * Math.cos(Math.PI / 8) + for_y * Math.cos(Math.PI / 8),
            duration: 2,
            ease: "power1.inOut",
        })
        .to(carusel_mest_osnov.position, {
            y: 6 + 7 * Math.cos(Math.PI / 2) + for_y * Math.cos(Math.PI / 2),
            duration: durating,
            ease: easing,
        })

    new gsap.timeline({repeat: -1, yoyo: true})
        .to(carusel_osnovanie3.rotation, {
            y: 2 * Math.PI,
            duration: 2,
            ease: "power2.inOut"
        })
        .to(carusel_osnovanie3.rotation, {
            z: Math.PI / 2,
            duration: 10,
            ease: "power3.inOut"
        })
        .to(carusel_osnovanie3.rotation, {
            z: -Math.PI / 2,
            duration: 2,
            ease: "power2.inOut"
        })
        .to(carusel_osnovanie3.rotation, {
            z: 0,
            duration: 2,
            ease: "power2.inOut"
        })
    new gsap.to(carusel_osnovanie3.rotation, {
        x: 2 * Math.PI,
        duration: 6,
        ease: "power3.inOut",
        repeat: -1
    })
}
carusel_animation()


//_______________БАССЕЙН С ЛОДКАМИ______________
const bassein = new THREE.Group()
objects.add(bassein)

const bassein_osn = new THREE.Group()
bassein.add(bassein_osn)
const bassein_woda = new THREE.Group()
bassein.add(bassein_woda)

const bass_osn = 128
const bassein_material = new THREE.MeshStandardMaterial({
    map: placticColorTexture,
    aoMap: placticAmbientOcclusionTexture,
    //displacementMap: placticHeightTexture,
    roughnessMap: placticRoughnessTexture,
    normalMap: placticNormalTexture,
    color: 0xffff00
})
for (let i = 0; i < bass_osn; i++) {
    const bassein1 = new THREE.Mesh(
        new THREE.CylinderGeometry(1, 1, 10, 16, 16),
        bassein_material
    )
    bassein1.castShadow = true
    bassein1.position.y = 5
    bassein1.position.z = 32 * Math.sin(2 * Math.PI * i / (bass_osn))
    bassein1.position.x = 32 * Math.cos(2 * Math.PI * i / (bass_osn))
    bassein_osn.add(bassein1)
}
const bassein2 = new THREE.Mesh(
    new THREE.CircleGeometry(32,16),
    bassein_material
)
bassein2.receiveShadow = true
bassein2.position.y = 2
bassein2.rotation.x = -Math.PI/2
bassein_osn.add(bassein2)
const bassein3 = new THREE.Mesh(
    new THREE.TorusGeometry(32,2,16,32),
    bassein_material
)
bassein3.castShadow = true
bassein3.position.y = 10
bassein3.rotation.x = Math.PI/2
bassein_osn.add(bassein3)
var wodas = []
for (let i = 0; i < 81; i++) {
    const woda = new THREE.Mesh(
        new THREE.SphereGeometry(4,16,16,0, 2*Math.PI),
        water2
    )
    woda.position.y = 6

    if (i > 0 && i < 9){
        woda.position.y += 1
        woda.position.z = 7 * Math.sin(2 * Math.PI * i / (8))
        woda.position.x = 7 * Math.cos(2 * Math.PI * i / (8))}
    else if (i > 8 && i < 25){
        woda.position.y += 1
        woda.position.z = 14 * Math.sin(2 * Math.PI * i / (16))
        woda.position.x = 14 * Math.cos(2 * Math.PI * i / (16))}
    else if (i > 24 && i < 49){
        woda.position.y += 1
        woda.position.z = 21 * Math.sin(2 * Math.PI * i / (24))
        woda.position.x = 21 * Math.cos(2 * Math.PI * i / (24))}
    else if (i > 48 && i < 81){
        woda.position.y += 1
        woda.position.z = 28 * Math.sin(2 * Math.PI * i / (32))
        woda.position.x = 28 * Math.cos(2 * Math.PI * i / (32))}
    bassein_woda.add(woda)
    wodas[i] = woda
}

for (let i = 0; i < 81; i++) {
    if (i > 0 && i < 9){
        new gsap.to(wodas[i].position, {
            y: 7.5 + 1*Math.sin(4*Math.PI * i / (8)),
            // z: 5 * Math.sin(2 * Math.PI * i / (8)),
            // x: 5 * Math.cos(2 * Math.PI * i / (8)),
            repeat: -1,
            duration: 10,
            yoyo: true
        })
    }
    else if (i > 8 && i < 25) {
        new gsap.to(wodas[i].position, {
            y: 7.5 + 1 * Math.sin(8 * Math.PI * i / (16)),
            // z: 12 * Math.sin(2 * Math.PI * i / (16)),
            // x: 12 * Math.cos(2 * Math.PI * i / (16)),
            repeat: -1,
            duration: 10,
            yoyo: true
        })
    }
    else if (i > 24 && i < 49) {
        new gsap.to(wodas[i].position, {
            y: 7.5 + 1 * Math.sin(12 * Math.PI * i / (24)),
            // z: 19 * Math.sin(2 * Math.PI * i / (24)),
            // x: 19 * Math.cos(2 * Math.PI * i / (24)),
            repeat: -1,
            duration: 10,
            yoyo: true
        })
    }
    else if (i > 48 && i < 81) {
        new gsap.to(wodas[i].position, {
            y: 7.5 + 1 * Math.sin(16 * Math.PI * i / (32)),
            // z: 26 * Math.sin(2 * Math.PI * i / (32)),
            // x: 26 * Math.cos(2 * Math.PI * i / (32)),
            repeat: -1,
            duration: 10,
            yoyo: true
        })
    }
}


const wodav = new THREE.Mesh(
    new THREE.CircleGeometry(32,16),
    water
)
wodav.position.y = 10
wodav.rotation.x = -Math.PI/2
bassein_woda.add(wodav)

const bassein_crugs = new THREE.Group()
bassein_crugs.position.set(0,0,0)
bassein.add(bassein_crugs)

const bass_cvetc = new THREE.MeshStandardMaterial({
    map: for_bassColorTexture,
    aoMap: for_bassAmbientOcclusionTexture,
    roughnessMap: for_bassRoughnessTexture,
    //displacementMap: for_bassHeightTexture,
    normalMap: for_bassNormalTexture,
    metalnessMap: for_bassMetalnessTexture
})

var bass_crugs = []
for (let i = 0; i < 4; i++) {
    const bass_crug = new THREE.Mesh(
        new THREE.TorusGeometry(4, 2, 16, 16),
        bass_cvetc
    )
    bass_crug.castShadow = true
    bass_crug.position.y = 10.5
    bass_crug.position.z = 20 * Math.sin(2 * Math.PI * i / (4))
    bass_crug.position.x = 20 * Math.cos(2 * Math.PI * i / (4))
    bass_crug.rotation.x = Math.PI / 2
    bassein_crugs.add(bass_crug)
    bass_crugs[i] = bass_crug
}
new gsap.timeline({repeat: -1})
    .to(bassein_crugs.rotation, {
        y: Math.PI*2,
        duration: 30,
        ease: "power1.inOut"
    })
    .to(bassein_crugs.rotation, {
        y: -Math.PI*2,
        duration: 30,
        ease: "power1.inOut"
    })

for (let i = 0; i < 4; i++) {
    new gsap.timeline({repeat: -1})
        .to(bass_crugs[i].rotation, {
            y: (i%2)*Math.PI / 36,
            z: ((i+1)%2)*Math.PI / 36,
            duration: 10,
        })
        .to(bass_crugs[i].rotation, {
            y: 0,
            z: 0,
            duration: 10,
        })
        .to(bass_crugs[i].rotation, {
            y: (i%2)*Math.PI / 36,
            z: ((i+1)%2)*Math.PI / 36,
            duration: 10,
        })
        .to(bass_crugs[i].rotation, {
            y: 0,
            z: 0,
            duration: 10,
        })
}
var perx = 16
for (let i = 0; i < 4; i++) {
    if (i>=0 && i<=1){perx = 16*i}
    else {perx = 48 - 16*(i%2)}
    new gsap.timeline({repeat: -1, yoyo:true})
        .to(bass_crugs[i].position, {
            x: 23 * Math.cos(2 * Math.PI * i / (4)),
            z: 8 * Math.sin(2 * Math.PI * i / (4)),
            duration: 10,
        })
        .to(bass_crugs[i].position, {
            x: 8 * Math.cos(2 * Math.PI * i / (4)),
            z: 23 * Math.sin(2 * Math.PI * i / (4)),
            duration: 10,
        })
        .to(bass_crugs[i].position, {
            x: 24-perx,
            z: 0,
            duration: 10,
        })
}

if (p1 == "1" && p2 == "2"){
    coleso_obzor.position.set(-100, 0, -100)//1
    carusel.position.set(-100,0,100)//2
    bassein.position.set(100,0,100)}//3

else if (p1 == "1" && p2 == "3"){
    coleso_obzor.position.set(-100, 0, -100)//1
    carusel.position.set(-100,0,100)//3
    bassein.position.set(100,0,100)}//2

else if (p1 == "2" && p2 == "1"){
    coleso_obzor.position.set(-100, 0, 100)//2
    carusel.position.set(-100,0,-100)//1
    bassein.position.set(100,0,100)}//3

else if (p1 == "2" && p2 == "3"){
    coleso_obzor.position.set(-100, 0, 100)//2
    carusel.position.set(100,0,100)//3
    bassein.position.set(-100,0,-100)}//1

else if (p1 == "3" && p2 == "1"){
    coleso_obzor.position.set(100, 0, 100)//3
    carusel.position.set(-100,0,-100)//1
    bassein.position.set(-100,0,100)}//2

else if (p1 == "3" && p2 == "2"){
    coleso_obzor.position.set(100, 0, 100)//3
    carusel.position.set(-100,0,100)//2
    bassein.position.set(-100,0,-100)}//1
bassein.rotation.y = Math.random()*Math.PI*2
coleso_obzor.rotation.y = Math.random()*Math.PI*2
carusel.rotation.y = Math.random()*Math.PI*2



//______________КАССА_____________
const kassa = new THREE.Group()
const nadpis = new THREE.Group()
kassa.add(nadpis)

const text_crugses = []
const text_crugs = new THREE.Group()
const text_3d = new THREE.Group()
text_3d.position.set(0,200,0)
objects.add(text_3d)
text_3d.add(text_crugs)

const kassa_cvetv = new THREE.MeshStandardMaterial({
    map: cor_metallColorTexture,
    metalnessMap: cor_metallAmbientOcclusionTexture,
    normalMap: cor_metallNormalTexture,
    roughnessMap: cor_metallRoughnessTexture,
    color: 0xff0000})

const fontLoader = new FontLoader()
fontLoader.load(
    'textures/helvetiker_regular.typeface.json',
    (font) => {
        const textGeometry = new TextGeometry(
            'Park Attractions',
            {
                font: font,
                size: 24,
                height: 5,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 5,
            }
        )
        textGeometry.computeBoundingBox()
        textGeometry.center()
        const text = new THREE.Mesh(textGeometry, new THREE.MeshStandardMaterial({
            map: cor_metallColorTexture,
            metalnessMap: cor_metallAmbientOcclusionTexture,
            normalMap: cor_metallNormalTexture,
            roughnessMap: cor_metallRoughnessTexture,
            color: 0xffff00}))
        text_3d.add(text)

        const textGeometry2 = new TextGeometry(
            'Kacca',
            {
                font: font,
                size: 10,
                height: 5,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 5,
            }
        )
        textGeometry2.computeBoundingBox()
        textGeometry2.center()
        const text2 = new THREE.Mesh(textGeometry2, kassa_cvetv)
        nadpis.add(text2)
        text2.position.y = 49

        //const donutGeometry = new THREE.TorusGeometry(6, 2, 20, 45)
        //
        // for (let i=0; i<100; i++){
        //     const donut = new THREE.Mesh(donutGeometry, new THREE.MeshStandardMaterial({
        //         map: cor_metallColorTexture,
        //         metalnessMap: cor_metallAmbientOcclusionTexture,
        //         normalMap: cor_metallNormalTexture,
        //         roughnessMap: cor_metallRoughnessTexture,
        //         color: Math.random() * 0xffffff}))
        //     donut.position.x = (Math.random() - 0.5) * 250
        //     donut.position.y = (Math.random() - 0.5) * 100
        //     donut.position.z = (Math.random() - 0.5) * 100
        //     donut.rotation.x = Math.random() * Math.PI
        //     donut.rotation.y = Math.random() * Math.PI
        //     const scale = Math.random()
        //     donut.scale.set(scale,scale, scale)
        //     text_crugses[i] = donut
        //     text_crugs.add(donut)
        // }

        new gsap.to(text_3d.rotation,{
            y: 2*Math.PI,
            repeat: -1,
            yoyo: true,
            duration: 50
        })

        new gsap.to(text_crugs.rotation,{
            x: 2*Math.PI,
            repeat: -1,
            yoyo: true,
            duration: 50
        })
    }

)

objects.add(kassa)
const k1 = new THREE.Mesh(
    new THREE.CylinderGeometry(20, 20, 30, 16, 16, true),
    kirpich
    // new THREE.MeshStandardMaterial({
    //     map: mramorColorTexture,
    //     aoMap: mramorAmbientOcclusionTexture,
    //     normalMap: mramorNormalTexture,
    //     roughnessMap: mramorRoughnessTexture})
)
k1.position.y = 15
k1.castShadow = true
kassa.add(k1)

const kassa_cvetk = new THREE.MeshStandardMaterial({
    map: cor_metallColorTexture,
    metalnessMap: cor_metallAmbientOcclusionTexture,
    normalMap: cor_metallNormalTexture,
    roughnessMap: cor_metallRoughnessTexture,
    color: 0x964b00})

const k2 = new THREE.Mesh(
    new THREE.CylinderGeometry(8, 26, 12, 8, 1),
    kassa_cvetk
)
k2.position.y = 36
k2.castShadow = true
kassa.add(k2)

const k3 = new THREE.Mesh(
    new THREE.CylinderGeometry(2, 2, 2, 16, 16),
    new THREE.MeshStandardMaterial({
        map: cor_metallColorTexture,
        metalnessMap: cor_metallAmbientOcclusionTexture,
        normalMap: cor_metallNormalTexture,
        roughnessMap: cor_metallRoughnessTexture,
        color: 0x000000})
)
k3.position.y = 43
k3.castShadow = true
nadpis.add(k3)

const k4 = new THREE.Mesh(
    new THREE.BoxGeometry(40, 0.5, 2, 16, 16),
    new THREE.MeshStandardMaterial({
        map: cor_metallColorTexture,
        metalnessMap: cor_metallAmbientOcclusionTexture,
        normalMap: cor_metallNormalTexture,
        roughnessMap: cor_metallRoughnessTexture,
        color: 0x000000})
)
k4.position.y = 43.75
k4.castShadow = true
nadpis.add(k4)

new gsap.to(nadpis.rotation,{
    y: -2*Math.PI,
    repeat: -1,
    duration: 20,
    ease: "none"
})

const ko1 = new THREE.Mesh(
    new THREE.BoxGeometry(8,8,0.5),
    new THREE.MeshStandardMaterial({
        map: cor_metallColorTexture,
        metalnessMap: cor_metallAmbientOcclusionTexture,
        normalMap: cor_metallNormalTexture,
        roughnessMap: cor_metallRoughnessTexture,
        envMap: new THREE.CubeTextureLoader()
            .setPath( 'textures/okr/' )
            .load( [
                'px.png',
                'nx.png',
                'py.png',
                'ny.png',
                'pz.png',
                'nz.png'
            ] ),
        envMapIntensity: 1,
        color: 0x0f52ba})
)
ko1.position.y = 18
ko1.rotation.y = -Math.PI/4
ko1.position.x = 20*Math.cos(Math.PI/2+Math.PI/4)
ko1.position.z = 20*Math.sin(Math.PI/2+Math.PI/4)
kassa.add(ko1)

const ko2 = new THREE.Mesh(
    new THREE.BoxGeometry(8,8,0.5),
    new THREE.MeshStandardMaterial({
        map: cor_metallColorTexture,
        metalnessMap: cor_metallAmbientOcclusionTexture,
        normalMap: cor_metallNormalTexture,
        roughnessMap: cor_metallRoughnessTexture,
        color: 0xff5200})
)
ko2.position.y = 18
ko2.rotation.y = -Math.PI/4
ko2.position.x = 20*Math.cos(-Math.PI/4)
ko2.position.z = 20*Math.sin(-Math.PI/4)
kassa.add(ko2)

const ko3 = new THREE.Mesh(
    new THREE.BoxGeometry(8,8,0.5),
    new THREE.MeshStandardMaterial({
        map: cor_metallColorTexture,
        metalnessMap: cor_metallAmbientOcclusionTexture,
        normalMap: cor_metallNormalTexture,
        roughnessMap: cor_metallRoughnessTexture,
        color: 0x0f520f})
)
ko3.position.y = 18
ko3.rotation.y = Math.PI/4
ko3.position.x = 20*Math.cos(-Math.PI/2 -Math.PI/4)
ko3.position.z = 20*Math.sin(-Math.PI/2 -Math.PI/4)
kassa.add(ko3)

const ko4 = new THREE.Mesh(
    new THREE.BoxGeometry(8,8,0.5),
    new THREE.MeshStandardMaterial({
        map: cor_metallColorTexture,
        metalnessMap: cor_metallAmbientOcclusionTexture,
        normalMap: cor_metallNormalTexture,
        roughnessMap: cor_metallRoughnessTexture,
        color: 0xff52ba})
)
ko4.position.y = 18
ko4.rotation.y = Math.PI/4
ko4.position.x = 20*Math.cos(Math.PI/4)
ko4.position.z = 20*Math.sin(Math.PI/4)
kassa.add(ko4)
const dorogki = new THREE.Group()
objects.add(dorogki)


const dg1 = new THREE.Mesh(
    new THREE.BoxGeometry(142,0.5,12),
    new THREE.MeshStandardMaterial({
        map: cor_metallColorTexture,
        metalnessMap: cor_metallAmbientOcclusionTexture,
        normalMap: cor_metallNormalTexture,
        roughnessMap: cor_metallRoughnessTexture,
        color: 0x0f52ba})
)
dg1.position.y = 0.24
dg1.receiveShadow = true
dg1.rotation.y = Math.PI/4
dg1.position.x = 71*Math.cos(Math.PI/2+Math.PI/4)
dg1.position.z = 71*Math.sin(Math.PI/2+Math.PI/4)
dorogki.add(dg1)

const dg2 = new THREE.Mesh(
    new THREE.BoxGeometry(96,0.5,12),
    new THREE.MeshStandardMaterial({
        map: cor_metallColorTexture,
        metalnessMap: cor_metallAmbientOcclusionTexture,
        normalMap: cor_metallNormalTexture,
        roughnessMap: cor_metallRoughnessTexture,
        color: 0xff5200})
)
dg2.position.y = 0.25
dg2.receiveShadow = true
dg2.rotation.y = Math.PI/4
dg2.position.x = 48*Math.cos(-Math.PI/4)
dg2.position.z = 48*Math.sin(-Math.PI/4)
dorogki.add(dg2)

const dg22 = new THREE.Mesh(
    new THREE.BoxGeometry(86,0.5,12),
    new THREE.MeshStandardMaterial({
        map: cor_metallColorTexture,
        metalnessMap: cor_metallAmbientOcclusionTexture,
        normalMap: cor_metallNormalTexture,
        roughnessMap: cor_metallRoughnessTexture,
        color: 0xff5200})
)
dg22.position.y = 0.27
dg22.receiveShadow = true
dg22.rotation.y = -Math.PI/4.5
dg22.position.x = 79
dg22.position.z = -51
dorogki.add(dg22)

const dg3 = new THREE.Mesh(
    new THREE.BoxGeometry(142,0.5,12),
    new THREE.MeshStandardMaterial({
        map: cor_metallColorTexture,
        metalnessMap: cor_metallAmbientOcclusionTexture,
        normalMap: cor_metallNormalTexture,
        roughnessMap: cor_metallRoughnessTexture,
        color: 0x0f520f})
)
dg3.receiveShadow = true
dg3.position.y = 0.23
dg3.rotation.y = -Math.PI/4
dg3.position.x = 71*Math.cos(-Math.PI/2 -Math.PI/4)
dg3.position.z = 71*Math.sin(-Math.PI/2 -Math.PI/4)
dorogki.add(dg3)

const dg4 = new THREE.Mesh(
    new THREE.BoxGeometry(142,0.5,12),
    new THREE.MeshStandardMaterial({
        map: cor_metallColorTexture,
        metalnessMap: cor_metallAmbientOcclusionTexture,
        normalMap: cor_metallNormalTexture,
        roughnessMap: cor_metallRoughnessTexture,
        color: 0xff52ba})
)
dg4.position.y = 0.22
dg4.receiveShadow = true
dg4.rotation.y = -Math.PI/4
dg4.position.x = 71*Math.cos(Math.PI/4)
dg4.position.z = 71*Math.sin(Math.PI/4)
dorogki.add(dg4)

const kusti = new THREE.Group()
objects.add(kusti)

for (let i=0; i<48; i++){
    const kust_radius = (Math.random()) * 10
    const kust = new THREE.Mesh(
        new THREE.SphereGeometry(kust_radius, 16,16),
        new THREE.MeshLambertMaterial({
            map: cor_metallColorTexture,
            metalnessMap: cor_metallAmbientOcclusionTexture,
            normalMap: cor_metallNormalTexture,
            roughnessMap: cor_metallRoughnessTexture,
            color: 0x00ff00}))
    kust.castShadow = true
    kust.position.x = 100*Math.cos(i*Math.PI/2) + (Math.random() - 0.5) * 50
    kust.position.z = 100*Math.sin(i*Math.PI/2) + (Math.random() - 0.5) * 50
    kust.position.y = kust_radius/1.8
    kusti.add(kust)
}







// Свет
// var light = new THREE.DirectionalLight(0xffffff, 0.9);
var light = new THREE.SpotLight(0xffffff, 1);
light.castShadow = true;
light.position.set(-300, 300, 400);
light.shadow.mapSize.width = 2048
light.shadow.mapSize.height = 2048
light.shadow.camera.far = 1000
light.target.position.set(200, -20, -200);
scene.add(light);
scene.add(light.target);
const skyColor = 0xB1E1FF;  // светло-синий
const groundColor = 0xB97A20;  // коричневато-оранжевый
const intensity = 0.4;
const light2 = new THREE.HemisphereLight(skyColor, groundColor, intensity);
scene.add(light2);
// const cameraHelper = new THREE.CameraHelper(light.shadow.camera);
// scene.add(cameraHelper);



const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

//Camera
const camera = new THREE.PerspectiveCamera(75,sizes.width/sizes.height)
camera.position.z = 200
camera.position.y = 250
camera.position.x = 200

scene.add(camera)

const render = new THREE.WebGLRenderer({
    canvas: document.querySelector("canvas.webgl")
})
render.setSize(sizes.width, sizes.height)
render.setPixelRatio(Math.min(window.devicePixelRatio, 2))
render.shadowMap.enabled = true
render.shadowMap.type = THREE.PCFSoftShadowMap
render.render(scene, camera)


const clock = new THREE.Clock()
const controls = new OrbitControls(camera, render.domElement)
controls.enableDamping = true

//Масштабирование
window.addEventListener("resize", ()=>{
    sizes.width = window.innerWidth
    sizes.heigh = window.innerHeight

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    render.setSize(sizes.width, sizes.height)
    render.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

//FullScreen
window.addEventListener("dblclick", ()=>{
    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement
    if (!fullscreenElement) {
        if (render.domElement.requestFullscreen){
            render.domElement.requestFullscreen()
        }
        render.domElement.requestFullscreen()
    }
    else{
        document.exitFullscreen()
    }
})

var for_space = 0
window.addEventListener("keyup", (event)=>{
    if (event.key == "1") {
        new gsap.to(camera.position,{
            x: 150,
            y: 150,
            z: 150,
            ease: "power1.inOut",
            duration: 5
    })}
    else if (event.key == "2") {
        new gsap.to(camera.position,{
            x: -150,
            y: 150,
            z: -150,
            ease: "power1.inOut",
            duration: 5
        })}
    else if (event.key == "3") {
        new gsap.to(camera.position,{
            x: -150,
            y: 150,
            z: 150,
            ease: "power1.inOut",
            duration: 5
        })}
    else if (event.key == "4") {
        new gsap.to(camera.position,{
            x: 180,
            y: 90,
            z: -180,
            ease: "power1.inOut",
            duration: 5
        })}
    else if (event.which == 32) {
        if (for_space == 0){
            light.color.set(0xb9d5ff)
            light.intensity = 0.2
            light2.intensity = 0.2
            for_space = 1
        }
        else {light.color.set(0xffffff)
            light.intensity = 1
            light2.intensity = 0.4
            for_space = 0
        }
    }
})

let delta = 0;
// 60 fps
let interval = 1 / 60;

function update() {
    window.requestAnimationFrame(update);
    delta += clock.getDelta();

    if (delta  > interval) {
        // The draw or time dependent code are here
        // coleso_animation()
        // gorki_animation()
        // carusel_animation()
        render.render(scene, camera)
        controls.update()

        delta = delta % interval;
    }
}
update()

var coleso_cvet1_1 = {
    modelcolor: "#322222"
}


// GUI
const ColesoObzor = gui.addFolder("ColesoObzor")
ColesoObzor.add(coleso_obzor.scale, "x", 0.1, 4).name("scale.x")
ColesoObzor.add(coleso_obzor.scale, "y", 0.1, 4).name("scale.y")
ColesoObzor.add(coleso_obzor.scale, "z", 0.1, 4).name("scale.z")
ColesoObzor.add(coleso_obzor.rotation, "y", 0, 2*Math.PI).name("rotation.y")
ColesoObzor.add(coleso_obzor.position, "x", -300, 300).name("position.x")
ColesoObzor.add(coleso_obzor.position, "y", -300, 300).name("position.y")
ColesoObzor.add(coleso_obzor.position, "z", -300, 300).name("position.z")
ColesoObzor.addColor(coleso_cvet1_1, "modelcolor").name('Color_Coleso').onChange(function() {
    coleso_cvet1.color.set(coleso_cvet1_1.modelcolor);
})
ColesoObzor.addColor(coleso_cvet1_1, "modelcolor").name('Color_Stoiki').onChange(function() {
    coleso_cvet2.color.set(coleso_cvet1_1.modelcolor);
})
ColesoObzor.addColor(coleso_cvet1_1, "modelcolor").name('Color_Budka1').onChange(function() {
    colesob_cvet1.color.set(coleso_cvet1_1.modelcolor);
})
ColesoObzor.addColor(coleso_cvet1_1, "modelcolor").name('Color_Budka2').onChange(function() {
    colesob_cvet2.color.set(coleso_cvet1_1.modelcolor);
})
ColesoObzor.addColor(coleso_cvet1_1, "modelcolor").name('Color_Budka_Balk').onChange(function() {
    colesob_cvet3.color.set(coleso_cvet1_1.modelcolor);
})


const AmericanGorka = gui.addFolder("AmericanGorka")
AmericanGorka.add(american_gorka.scale, "x", 0.1, 4).name("scale.x")
AmericanGorka.add(american_gorka.scale, "y", 0.1, 4).name("scale.y")
AmericanGorka.add(american_gorka.scale, "z", 0.1, 4).name("scale.z")
AmericanGorka.add(american_gorka.rotation, "y", 0, 2*Math.PI).name("rotation.y")
AmericanGorka.add(american_gorka.position, "x", -300, 300).name("position.x")
AmericanGorka.add(american_gorka.position, "y", -300, 300).name("position.y")
AmericanGorka.add(american_gorka.position, "z", -300, 300).name("position.z")
AmericanGorka.addColor(coleso_cvet1_1, "modelcolor").name('Color_Door').onChange(function() {
    dver_color.color.set(coleso_cvet1_1.modelcolor);
})
AmericanGorka.addColor(coleso_cvet1_1, "modelcolor").name('Color_Cepochka').onChange(function() {
    american_cvetd.color.set(coleso_cvet1_1.modelcolor);
})
AmericanGorka.addColor(coleso_cvet1_1, "modelcolor").name('Color_Balki').onChange(function() {
    american_cvetb.color.set(coleso_cvet1_1.modelcolor);
})
AmericanGorka.addColor(coleso_cvet1_1, "modelcolor").name('Color_Shar').onChange(function() {
    american_cvet1.color.set(coleso_cvet1_1.modelcolor);
})
AmericanGorka.addColor(coleso_cvet1_1, "modelcolor").name('Color_Stenki').onChange(function() {
    american_cvetv2.color.set(coleso_cvet1_1.modelcolor);
})

const cubeFolder = gui.addFolder('Carusel')
cubeFolder.add(carusel.scale, "x", 0.1, 4).name("scale.x")
cubeFolder.add(carusel.scale, "y", 0.1, 4).name("scale.y")
cubeFolder.add(carusel.scale, "z", 0.1, 4).name("scale.z")
cubeFolder.add(carusel.rotation, "y", 0, 2*Math.PI).name("rotation.y")
cubeFolder.add(carusel.position, "x", -300, 300).name("position.x")
cubeFolder.add(carusel.position, "y", -300, 300).name("position.y")
cubeFolder.add(carusel.position, "z", -300, 300).name("position.z")
cubeFolder.addColor(coleso_cvet1_1, "modelcolor").name('Color_Sphere').onChange(function() {
    carusel_cvets.color.set(coleso_cvet1_1.modelcolor);
})
cubeFolder.addColor(coleso_cvet1_1, "modelcolor").name('Color_Mesta').onChange(function() {
    carusel_cvetsid.color.set(coleso_cvet1_1.modelcolor);
})
cubeFolder.addColor(coleso_cvet1_1, "modelcolor").name('Color_Stoika').onChange(function() {
    carusel_cveto.color.set(coleso_cvet1_1.modelcolor);
})
cubeFolder.addColor(coleso_cvet1_1, "modelcolor").name('Color_Dvig-Mest').onChange(function() {
    carusel_cvetm1.color.set(coleso_cvet1_1.modelcolor);
})

const Bassein = gui.addFolder("Bassein")
Bassein.add(bassein.scale, "x", 0.1, 4).name("scale.x")
Bassein.add(bassein.scale, "y", 0.1, 4).name("scale.y")
Bassein.add(bassein.scale, "z", 0.1, 4).name("scale.z")
Bassein.add(bassein.rotation, "y", 0, 2*Math.PI).name("rotation.y")
Bassein.add(bassein.position, "x", -300, 300).name("position.x")
Bassein.add(bassein.position, "y", -300, 300).name("position.y")
Bassein.add(bassein.position, "z", -300, 300).name("position.z")
Bassein.addColor(coleso_cvet1_1, "modelcolor").name('Color_Bassein').onChange(function() {
    bassein_material.color.set(coleso_cvet1_1.modelcolor);
})
Bassein.addColor(coleso_cvet1_1, "modelcolor").name('Color_Crugs').onChange(function() {
    bass_cvetc.color.set(coleso_cvet1_1.modelcolor);
})

const Kassa = gui.addFolder("Kassa")
Kassa.add(kassa.scale, "x", 0.1, 4).name("scale.x")
Kassa.add(kassa.scale, "y", 0.1, 4).name("scale.y")
Kassa.add(kassa.scale, "z", 0.1, 4).name("scale.z")
Kassa.add(kassa.rotation, "y", 0, 2*Math.PI).name("rotation.y")
Kassa.add(kassa.position, "x", -300, 300).name("position.x")
Kassa.add(kassa.position, "y", -300, 300).name("position.y")
Kassa.add(kassa.position, "z", -300, 300).name("position.z")
Kassa.addColor(coleso_cvet1_1, "modelcolor").name('Color_Kirpich').onChange(function() {
    kirpich.color.set(coleso_cvet1_1.modelcolor);
})
Kassa.addColor(coleso_cvet1_1, "modelcolor").name('Color_Krisha').onChange(function() {
    kassa_cvetk.color.set(coleso_cvet1_1.modelcolor);
})
Kassa.addColor(coleso_cvet1_1, "modelcolor").name('Color_Text').onChange(function() {
    kassa_cvetv.color.set(coleso_cvet1_1.modelcolor);
})

const Tropinki = gui.addFolder("Tropinki")
Tropinki.add(dorogki.scale, "x", 0.1, 4).name("scale.x")
Tropinki.add(dorogki.scale, "y", 0.1, 16).name("scale.y")
Tropinki.add(dorogki.scale, "z", 0.1, 4).name("scale.z")
Tropinki.add(dorogki.rotation, "y", 0, 2*Math.PI).name("rotation.y")
Tropinki.add(dorogki.position, "x", -300, 300).name("position.x")
Tropinki.add(dorogki.position, "y", -300, 300).name("position.y")
Tropinki.add(dorogki.position, "z", -300, 300).name("position.z")

const Kusti = gui.addFolder("Kusti")
Kusti.add(kusti.scale, "x", 0.1, 4).name("scale.x")
Kusti.add(kusti.scale, "y", 0.1, 4).name("scale.y")
Kusti.add(kusti.scale, "z", 0.1, 4).name("scale.z")
Kusti.add(kusti.rotation, "y", 0, 2*Math.PI).name("rotation.y")
Kusti.add(kusti.position, "x", -300, 300).name("position.x")
Kusti.add(kusti.position, "y", -300, 300).name("position.y")
Kusti.add(kusti.position, "z", -300, 300).name("position.z")

const Scena = gui.addFolder("Scena")
Scena.add(objects.scale, "x", 0.1, 4).name("scale.x")
Scena.add(objects.scale, "y", 0.1, 4).name("scale.y")
Scena.add(objects.scale, "z", 0.1, 4).name("scale.z")
Scena.add(objects.rotation, "y", 0, 2*Math.PI).name("rotation.y")
Scena.add(objects.position, "x", -300, 300).name("position.x")
Scena.add(objects.position, "y", -300, 300).name("position.y")
Scena.add(objects.position, "z", -300, 300).name("position.z")

const Light = gui.addFolder("Light")
Light.add(light, 'intensity').min(0).max(3).step(0.01)
Light.addColor(coleso_cvet1_1, "modelcolor").name('Color').onChange(function() {
    light.color.set(coleso_cvet1_1.modelcolor);
})
Light.add(light.position, 'x').min(-400).max(400).step(1).name("scale.x")
Light.add(light.position, 'y').min(-400).max(400).step(1).name("scale.y")
Light.add(light.position, 'z').min(-400).max(400).step(1).name("scale.z")













var angle
var ac
var bc
function VectorAngle(x0,x,y0,y) {
    if (y0===y) {
        if (x>x0) angle = 0;
        else if (x<x0) angle = Math.PI;
        else if (x===x0) angle = 0;
    } else if (x0===x) {
        if (y>y0) angle = Math.PI/2;
        else if (y0>y) angle = -Math.PI/2;
        else angle = 0;
    }
    else {
        if (y0>y && x>x0) {
            ac = x - x0;
            bc = y - y0;
            angle = 180-Math.atan2(ac,bc)
            angle -= Math.PI;

        } else if (x>x0 && y>y0) {
            ac = y - y0;
            bc = x - x0;
            angle = 180-Math.atan2(ac,bc);
            angle += Math.PI;

        } else if (x0>x && y>y0) {
            ac = x - x0;
            bc = y - y0;
            angle = 180-Math.atan2(ac,bc);


        } else if (y0>y && x0>x) {
            ac = x - x0;
            bc = y - y0;
            angle = 180-Math.atan2(ac,bc);
            angle -= Math.PI;
        };
    }
    return angle;
}