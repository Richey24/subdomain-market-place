<template>
<header id="header" class="header-transparent header-effect-shrink"
			data-plugin-options="{'stickyEnabled': true, 'stickyEffect': 'shrink', 'stickyEnableOnBoxed': false, 'stickyEnableOnMobile': true, 'stickyStartAt': 70, 'stickyChangeLogo': false, 'stickyHeaderContainerHeight': 70}">
			<div class="header-body border-top-0 box-shadow-none">
				<div class="header-container container">
					<div class="header-row">
						<div class="header-column">
							<div class="header-row">
								<div class="header-logo appear-animation" data-appear-animation="fadeIn"
									data-plugin-options="{'accY': 100}">
									<a href="#" class="goto-top"><img alt="iMarketplace.World" width="150" height="75"
											data-sticky-width="82" data-sticky-height="36" data-sticky-top="0"
											src="assets/images/logo.png" data-plugin-lazyload
											data-plugin-options="{'threshold': 500}"
											data-original="assets/images/logo.png"></a>
								</div>
							</div>
						</div>
						<div class="header-column justify-content-end">
							<div class="header-row">
								<div class="header-nav header-nav-links header-nav-light-text header-nav-dropdowns-dark">
									<div class="header-nav-main header-nav-main-square header-nav-main-dropdown-no-borders header-nav-main-text-capitalize header-nav-main-text-size-2 header-nav-main-mobile-dark header-nav-main-effect-1 header-nav-main-sub-effect-1 appear-animation"
										data-appear-animation="fadeIn" data-plugin-options="{'accY': 100}">
										<nav class="collapse">
											<ul class="nav nav-pills mobile-nav" id="mainNav">
												<li class="dropdown"> <a class="dropdown-item dropdown-toggle text-dark" data-hash
														data-hash-offset="130" href="#demos"> Store Design Templates </a> </li>
												<li class="dropdown"> <a class="dropdown-item dropdown-toggle  text-dark" data-hash
														data-hash-offset="130" href="#reviews"> Reviews </a> </li>
												<li class="dropdown"> <a class="dropdown-item dropdown-toggle  text-dark" data-hash
														data-hash-offset="130" href="#support"> Support </a> </li>
												<li class="dropdown"> <a class="dropdown-item dropdown-toggle  text-dark" data-hash
														data-hash-offset="130" href="#features"> Features </a>
												</li>
												<li class="dropdown"> <a class="dropdown-item dropdown-toggle  text-dark" data-hash
														data-hash-offset="130" href="#elements"> Elements </a> </li>

												<li class="dropdown"> <a href="documentation.html  text-dark"
														class="dropdown-item dropdown-toggle"> Documentation </a> </li>
											</ul>
										</nav>
									</div>
									<button class="btn header-btn-collapse-nav" data-toggle="collapse"
										data-target=".header-nav-main nav"><i class="fa fa-bars"></i></button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
</template>
<style scope>

.btn-purple {
	background: #a537fd !important;
}
</style>