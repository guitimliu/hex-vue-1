# 六角學院 Vue 直播班 Week 1 從函式拆解認識設計模式

## 任務說明

* 使用者可以查看產品列表
* 使用者可以點擊單一產品，查看詳細資訊

## 挑戰任務

* LV3：不使用課程版型完成此功能

## 學習到的東西

### Bootstrap Carousel 元件 與 <template> 渲染不額外產生標籤

* 使用 Bootstrap Carousel 元件搭配顯示商品照片；並實作了解其架構。
* 希望渲染過程不額外新增標籤（Ex. v-for），而破壞 Carousel 元件架構而造成無法運作；可使用 `<template>` 標籤。
* 為此撰寫技術筆記[《Vue 搭配 template 標籤使渲染資料不額外產生標籤》](https://guiblogs.com/vue-template/)。

### 取得陣列長度並且判斷大小

* 原先有呈現其他圖片的版面時，希望其他圖片大於 0（代表有其他圖片），顯示圖片、相反則顯示提示訊息；但無法正常運作。
* 解決方法：要同時先判斷是否有該陣列、再判斷大小，範例如下：

``` html
v-if="temp.imagesUrl && temp.imagesUrl.length > 0"
```