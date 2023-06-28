<script setup lang="ts">
import TheHeader from './components/TheHeader.vue';
import MainSection from './components/landing/MainSection.vue';
import SectionOne from './components/landing/SectionOne.vue';
import SectionTwo from './components/landing/SectionTwo.vue';
import SectionThree from './components/landing/SectionThree.vue';
import SectionFour from './components/landing/SectionFour.vue';
import SectionFive from './components/landing/SectionFive.vue';
import SectionSix from './components/landing/SectionSix.vue';
import TestimonySection from './components/landing/TestimonySection.vue';
import TheFooter from './components/TheFooter.vue';
</script>

<template>
    	<div class="loading-overlay">
		<div class="bounce-loader">
			<div class="bounce1"></div>
			<div class="bounce2"></div>
			<div class="bounce3"></div>
		</div>
	</div>
	<div class="body">
    <the-header></the-header>
    <div role="main" class="main">

        <main-section></main-section>

        <!-- Section One -->
        <section-one></section-one>
        <!-- End Section One -->
        
        <!-- Section Two -->
        <section-two></section-two>        
        <!-- End Section Two -->
        
        <section-three></section-three>

        <section-four></section-four>
        
        <testimony-section></testimony-section>
        
        <section-six></section-six>

        <the-footer></the-footer>
    </div>
</div>
</template>
<style>
.text-primary {
    color: #a537fd !important;
}
</style>


