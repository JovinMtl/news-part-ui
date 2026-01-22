<template>
    <div id="app" class="min-h-screen h-screen overflow-x-hidden">
        <!-- Navigation -->
        <nav :class="['sticky top-0 z-50 border-b border-zinc-200/50 backdrop-blur-md bg-white/95', scrolled ? 'shadow-md' : 'shadow-sm']" role="navigation" aria-label="Primary">
            <div class="container mx-auto px-4 py-0">
                <div class="flex justify-between items-center">
                    <a href="#home" class="flex items-center space-x-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg">
                        <!-- <div class="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-lime-400 flex items-center justify-center shadow-lg float-animation" aria-hidden="true">
                            <Icon icon="fa-solid:dove" class="fas fa-dove text-white text-xl"/>
                        </div> -->
                        <!-- <span class="text-2xl font-bold text-zinc-900">YouthPeace<span class="text-blue-600">Alliance</span></span> -->
                        <img src="/former-logo.png" alt="Jeredis logo"  class="h-18 rounded-full"/>
                    </a>
                    
                    <div class="hidden md:flex items-center space-x-10">
                        <a href="#home" class="nav-link text-zinc-700 hover:text-blue-600 font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">Home</a>
                        <a href="#about" class="nav-link text-zinc-700 hover:text-blue-600 font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">About</a>
                        <a href="#programs" class="nav-link text-zinc-700 hover:text-blue-600 font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">Programs</a>
                        <a href="#blog" class="nav-link text-zinc-700 hover:text-blue-600 font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">Blog</a>
                        <a href="#contact" class="nav-link text-zinc-700 hover:text-blue-600 font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">Contact</a>
                    </div>
                    
                    <div class="flex items-center space-x-4">
                        <a href="#donate" class="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-full btn-glow hover:shadow-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 justify-center">
                            <!-- <Icon icon="fa-solid:heart" class="fas fa-heart mr-2"/> Support Us -->
                             Support Us
                        </a>
                        <button class="md:hidden text-zinc-700 p-2 rounded-lg hover:bg-zinc-100 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" @click="toggleMobileMenu" :aria-expanded="mobileMenuOpen.toString()" aria-controls="mobileMenu" aria-label="Toggle menu">
                            <Icon :icon="mobileMenuOpen ? 'fa7-solid:angle-double-up':'fa-solid:bars'" class="fa-solid" :class="mobileMenuOpen ? 'text-xl' : 'text-xl'" />
                        </button>
                    </div>
                </div>
                
                <!-- Mobile Menu -->
                <div v-show="mobileMenuOpen" id="mobileMenu" class="md:hidden mt-4 py-4 border-t border-zinc-200/50 animate-slideDown">
                    <div class="flex flex-col space-y-2">
                        <a href="#home" class="text-zinc-700 hover:text-blue-600 font-medium transition py-3 px-4 rounded-lg hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" @click="closeMobileMenu">Home</a>
                        <a href="#about" class="text-zinc-700 hover:text-blue-600 font-medium transition py-3 px-4 rounded-lg hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" @click="closeMobileMenu">About</a>
                        <a href="#programs" class="text-zinc-700 hover:text-blue-600 font-medium transition py-3 px-4 rounded-lg hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" @click="closeMobileMenu">Programs</a>
                        <a href="#blog" class="text-zinc-700 hover:text-blue-600 font-medium transition py-3 px-4 rounded-lg hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" @click="closeMobileMenu">Blog</a>
                        <a href="#contact" class="text-zinc-700 hover:text-blue-600 font-medium transition py-3 px-4 rounded-lg hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" @click="closeMobileMenu">Contact</a>
                    </div>
                </div>
            </div>
        </nav>

        <main id="main">
            <!-- Hero Section -->
            <section id="home" class="hero-gradient py-16 md:py-28 overflow-hidden relative scroll-mt-24">
                <!-- <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639436926668-2f8b4f32e15a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDcxMzN8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIweW91dGglMjBwZWFjZSUyMGNvbW11bml0eSUyMHNtaWxpbmclMjBvdXRkb29yc3xlbnwwfDB8fHwxNzY1NTU1NzgyfDA&ixlib=rb-4.1.0&q=80&w=1920')] bg-cover bg-center opacity-10"></div> -->
                <!-- <div class="absolute inset-0 bg-[url('/jeredis1.png')] bg-cover bg-center opacity-20"></div> -->
                <div class="absolute inset-0 hero bg-cover bg-center opacity-20" data-bg="/jeredis1.png"></div>
                <div class="container mx-auto px-4 relative">
                    <div class="flex flex-col lg:flex-row items-center">
                        <div class=" mb-12 lg:mb-0 fade-in">
                            <div class="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 text-amber-800 font-medium mb-6 shadow-sm animate-pulse">
                                <Icon icon="fa-solid:star" class="mr-2" /> Empowering Youth for Peace Since 2019
                            </div>
                            <h3 class="text-4xl md:text-6xl font-bold text-zinc-900 mb-6 leading-tight sm:text-center text-center">
                                Jeunesse Engagée pour <span class="text-gradient">la Reconciliation Effective</span> en vue d'un Développement <span class="text-gradient">Intégral de la Société</span>
                            </h3>
                            <div style="display: flex; justify-content: center;">
                                <img src="/logo.png" alt="Jeredis Logo" class="min-w-62 h-auto"></img>
                            </div>
                            <p class="text-lg text-zinc-600 mb-8 leading-relaxed">
                                We unite young leaders across communities to foster dialogue, resolve conflicts, and build sustainable peace for future generations.
                            </p>
                            <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                <a href="#about" class="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-full btn-glow hover:shadow-xl transition-all duration-300 flex items-center justify-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">
                                    <!-- <i class="fas fa-hands-helping mr-3 group-hover:rotate-12 transition-transform"></i> Join Our Movement -->
                                    <Icon icon="fa-solid:hands-helping" class="mr-3 group-hover:rotate-12 transition-transform"/> Join Our Movement
                                </a>
                                <button @click="openVideo" class="px-8 py-3.5 bg-gradient-to-r from-lime-500 to-lime-400 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-lime-500">
                                    <Icon icon="fa-solid:play-circle" class="fa- mr-3 group-hover:scale-110 transition-transform"/> Watch Our Story
                                </button>
                            </div>
                        </div>
                         
                        <div class="lg:w-1/2" style="display:none">
                            <div class="relative fade-in skew-x-5" style="transition-delay: 0.1s; top: -3em;">
                                <div class="bg-gradient-to-r from-blue-500 to-lime-400 rounded-3xl p-1.5 shadow-2xl image-hover">
                                    <div class="bg-white rounded-3xl p-8">
                                        <div class="grid grid-cols-2 gap-6">
                                            <div class="bg-blue-50 p-5 rounded-2xl card-hover">
                                                <div class="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4 shadow-sm">
                                                    <Icon icon="fa-solid:users" class="text-blue-600 text-2xl" aria-hidden="true"/>
                                                </div>
                                                <h3 class="font-bold text-lg text-zinc-900 mb-2">Youth Leaders</h3>
                                                <p class="text-zinc-600 text-sm">Trained over 2000 young peacebuilders</p>
                                            </div>
                                            <div class="bg-lime-50 p-5 rounded-2xl card-hover">
                                                <div class="w-14 h-14 rounded-full bg-lime-100 flex items-center justify-center mb-4 shadow-sm">
                                                    <Icon icon="bi:globe-europe-africa-fill" class="text-lime-600 text-2xl" aria-hidden="true"/>
                                                </div>
                                                <h3 class="font-bold text-lg text-zinc-900 mb-2">National Reach</h3>
                                                <p class="text-zinc-600 text-sm">Active in 5 provinces across Burundi</p>
                                            </div>
                                            <div class="bg-amber-50 p-5 rounded-2xl card-hover">
                                                <div class="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mb-4 shadow-sm">
                                                    <Icon icon="fa-solid:dove" class="text-amber-600 text-2xl" aria-hidden="true"/>
                                                <!-- <Icon icon="fa7-regular:hand-peace" class="text-amber-600 text-2xl" aria-hidden="true"/> -->
                                                 </div>
                                                <h3 class="font-bold text-lg text-zinc-900 mb-2">Peace Dialogues</h3>
                                                <p class="text-zinc-600 text-sm">Facilitated 50+ community dialogues</p>
                                            </div>
                                            <div class="bg-yellow-50 p-5 rounded-2xl card-hover">
                                                <div class="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center mb-4 shadow-sm">
                                                    <Icon icon="fa-solid:graduation-cap" class="text-yellow-600 text-2xl" aria-hidden="true"/>
                                                </div>
                                                <h3 class="font-bold text-lg text-zinc-900 mb-2">Education</h3>
                                                <p class="text-zinc-600 text-sm">Peace clubs in 8 schools</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Floating elements -->
                                <div class="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-yellow-400/20 flex items-center justify-center float-animation" aria-hidden="true">
                                    <div class="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg">
                                        <Icon icon="fa-solid:peace" class="text-white text-2xl"/>
                                    </div>
                                </div>
                                <div class="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-blue-400/20 flex items-center justify-center float-animation" style="animation-delay: 1s" aria-hidden="true">
                                    <div class="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center shadow-lg">
                                        <Icon icon="fa-solid:heart" class="text-white text-xl"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <!-- Video Modal -->
                <div v-if="showVideo" class="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4" role="dialog" aria-modal="true" aria-label="Watch our story video">
                    <div class="bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden">
                        <div class="flex items-center justify-between px-4 py-3 border-b">
                            <h3 class="font-semibold text-zinc-800">Our Story</h3>
                            <button @click="closeVideo" class="p-2 rounded-lg hover:bg-zinc-100 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" aria-label="Close video">
                                <Icon icon="fa-solid:times"/>
                            </button>
                        </div>
                        <div class="relative w-full" style="padding-top: 56.25%">
                            <iframe class="absolute inset-0 w-full h-full" :src="videoSrc" title="Jeredis Story" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </section> 
                

            <!-- Stats Section -->
            <section class="py-20 bg-gradient-to-r from-blue-50/80 to-lime-50/80 backdrop-blur-sm">
                <div class="container mx-auto px-4">
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div class="text-center fade-in">
                            <div class="text-5xl font-bold text-blue-600 mb-3 stat-counter">{{ animatedStats.youthReached.toLocaleString() }}</div>
                            <p class="text-zinc-600 font-medium">Youth Reached</p>
                            <div class="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-300 mx-auto mt-3 rounded-full"></div>
                        </div>
                        <div class="text-center fade-in" style="transition-delay: 0.1s">
                            <div class="text-5xl font-bold text-lime-500 mb-3 stat-counter">{{ animatedStats.programs }}</div>
                            <p class="text-zinc-600 font-medium">Peace Programs</p>
                            <div class="w-16 h-1 bg-gradient-to-r from-lime-500 to-lime-300 mx-auto mt-3 rounded-full"></div>
                        </div>
                        <div class="text-center fade-in" style="transition-delay: 0.2s">
                            <div class="text-5xl font-bold text-amber-500 mb-3 stat-counter">{{ animatedStats.countries }}</div>
                            <p class="text-zinc-600 font-medium">Countries</p>
                            <div class="w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-300 mx-auto mt-3 rounded-full"></div>
                        </div>
                        <div class="text-center fade-in" style="transition-delay: 0.3s">
                            <div class="text-5xl font-bold text-yellow-500 mb-3 stat-counter">{{ animatedStats.satisfaction }}%</div>
                            <p class="text-zinc-600 font-medium">Satisfaction Rate</p>
                            <div class="w-16 h-1 bg-gradient-to-r from-yellow-500 to-yellow-300 mx-auto mt-3 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- About Section -->
            <section id="about" class="py-20 scroll-mt-24">
                <div class="container mx-auto px-4">
                    <div class="grid lg:grid-cols-2 gap-12 items-center">
                        <div class="order-2 lg:order-1 fade-in">
                            <h2 class="text-4xl font-bold text-zinc-900 mb-5">Who We Are</h2>
                            <p class="text-lg text-zinc-600 leading-relaxed mb-6">
                                JEREDIS is a framework that aims to engage all young volunteers, without exception, in this reconciliation process, which is already underway but whose destination remains unknown.

                                Young people, the custodians of family history, must absolutely be involved. This is a prerequisite for effective reconciliation. JEREDIS is a youth association that, counting on the peace that will result from genuine reconciliation, is committed to development for all, without exception, in all areas and sectors, across all provinces.
                            </p>
                            <ul class="space-y-4">
                                <li class="flex items-start">
                                    <span class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                                        <Icon icon="fa-solid:seedling" class="text-blue-600"/>
                                    </span>
                                    <div>
                                        <p class="font-semibold text-zinc-900">Grassroots Impact</p>
                                        <p class="text-zinc-600">Supporting youth-led projects that address local challenges with sustainable solutions.</p>
                                    </div>
                                </li>
                                <li class="flex items-start">
                                    <span class="w-8 h-8 rounded-full bg-lime-100 flex items-center justify-center mr-3 mt-0.5">
                                        <Icon icon="fa-solid:handshake" class="text-lime-600"/>
                                    </span>
                                    <div>
                                        <p class="font-semibold text-zinc-900">Dialogue & Mediation</p>
                                        <p class="text-zinc-600">Bringing communities together to build trust and resolve conflicts peacefully.</p>
                                    </div>
                                </li>
                                <li class="flex items-start">
                                    <span class="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-0.5">
                                        <Icon icon="fa-solid:chalkboard-teacher" class="text-amber-600"/>
                                    </span>
                                    <div>
                                        <p class="font-semibold text-zinc-900">Education & Training</p>
                                        <p class="text-zinc-600">Delivering sessions and workshops in schools and youth centers nationalwide.</p>
                                    </div>
                                </li>
                            </ul>
                            <div class="mt-8 flex items-center space-x-4">
                                <a href="#programs" class="px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600">
                                    Explore Programs
                                </a>
                                <a href="#contact" class="px-6 py-3 rounded-full border border-zinc-300 text-zinc-800 font-medium hover:bg-zinc-50 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-400">
                                    Contact Us
                                </a>
                            </div>
                        </div>
                        <div class="order-1 lg:order-2 fade-in">
                            <div class="relative rounded-3xl overflow-hidden shadow-2xl">
                                <!-- <img id="comImg" loading="lazy" src="https://images.unsplash.com/photo-1616680214429-d79397e56688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDcxMzN8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBwcm9qZWN0JTIwdm9sdW50ZWVyaW5nJTIwY2xlYW4lMjB1cCUyMHlvdXRofGVufDB8MHx8fDE3NjU1NTU3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1200" alt="Youth volunteers cleaning up a community space" class="w-full h-full object-cover image-hover"> -->
                                <img  id="comImg" loading="lazy" src="/jeredismembers.jpeg" alt="Youth volunteers cleaning up a community space" class="w-full h-full object-cover image-hover">
                                <!-- <div v-if="comImgAlt">
                                    <p>waiting image</p>
                                </div> -->
                                <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-blue-700 text-sm font-semibold px-3 py-1 rounded-full shadow">
                                    Community in Action
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Programs Section -->
            <section id="programs" class="py-20 scroll-mt-24">
                <div class="container mx-auto px-4">
                    <div class="text-center mb-16 fade-in">
                        <h2 class="text-4xl font-bold text-zinc-900 mb-4">Our <span class="text-gradient">Peacebuilding</span> Programs</h2>
                        <p class="text-lg text-zinc-600 max-w-3xl mx-auto leading-relaxed">We design transformative programs that equip young people with the skills to become agents of peace in their communities.</p>
                    </div>
                    
                    <div class="grid md:grid-cols-3 gap-8">
                        <div class="bg-white rounded-2xl shadow-xl p-8 card-hover border-t-4 border-blue-500 fade-in" style="transition-delay: 0.1s">
                            <div class="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 shadow-lg">
                                <Icon icon="fa-solid:comments" class="text-blue-600 text-3xl" aria-hidden="true"/>
                            </div>
                            <h3 class="text-2xl font-bold text-zinc-900 mb-4">Dialogue & Mediation</h3>
                            <p class="text-zinc-600 mb-6 leading-relaxed">Facilitating constructive conversations between youth from diverse backgrounds to resolve conflicts peacefully and build mutual understanding.</p>
                            <a href="#" class="text-blue-600 font-medium flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1 py-1">
                                Learn More <Icon icon="fa-solid:arrow-right" class="ml-3 group-hover:translate-x-2 transition-transform"/>
                            </a>
                        </div>
                        
                        <div class="bg-white rounded-2xl shadow-xl p-8 card-hover border-t-4 border-lime-500 fade-in" style="transition-delay: 0.2s">
                            <div class="w-16 h-16 rounded-full bg-lime-100 flex items-center justify-center mb-6 shadow-lg">
                                <Icon icon="fa-solid:brain" class="text-lime-600 text-3xl" aria-hidden="true"/>
                            </div>
                            <h3 class="text-2xl font-bold text-zinc-900 mb-4">Leadership Training</h3>
                            <p class="text-zinc-600 mb-6 leading-relaxed">Developing the next generation of ethical leaders with skills in conflict resolution, emotional intelligence, and community building.</p>
                            <a href="#" class="text-lime-600 font-medium flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 rounded px-1 py-1">
                                Learn More <Icon icon="fa-solid:arrow-right" class="ml-3 group-hover:translate-x-2 transition-transform"/>
                            </a>
                        </div>
                        
                        <div class="bg-white rounded-2xl shadow-xl p-8 card-hover border-t-4 border-amber-500 fade-in" style="transition-delay: 0.3s">
                            <div class="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-6 shadow-lg">
                                <Icon icon="fa-solid:hands-helping" class="text-amber-600 text-3xl" aria-hidden="true"/>
                            </div>
                            <h3 class="text-2xl font-bold text-zinc-900 mb-4">Community Projects</h3>
                            <p class="text-zinc-600 mb-6 leading-relaxed">Supporting youth-led initiatives that address local challenges, promote social cohesion, and create sustainable impact.</p>
                            <a href="#" class="text-amber-600 font-medium flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded px-1 py-1">
                                Learn More <Icon icon="fa-solid:arrow-right" class="fas fa-arrow-right ml-3 group-hover:translate-x-2 transition-transform"/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Blog Section -->
            <section id="blog" class="py-20 bg-gradient-to-b from-white to-blue-50/50 scroll-mt-24">
                <div class="container mx-auto px-4">
                    <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 fade-in">
                        <div class="mb-6 md:mb-0">
                            <h2 class="text-4xl font-bold text-zinc-900 mb-3">Latest <span class="text-gradient">Insights</span></h2>
                            <p class="text-lg text-zinc-600 max-w-2xl">Stories, research, and perspectives from the peacebuilding field</p>
                        </div>
                        <a href="#" class="text-blue-600 font-medium flex items-center group px-6 py-3 rounded-full border border-blue-200 hover:bg-blue-50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                            View All Articles <Icon icon="fa-solid:arrow-right" class="fas fa-arrow-right ml-3 group-hover:translate-x-2 transition-transform"/>
                        </a>
                    </div>
                    
                    <div class="grid md:grid-cols-3 gap-8">
                        <div class="bg-white rounded-2xl shadow-xl overflow-hidden card-hover fade-in" style="transition-delay: 0.1s">
                            <div class="h-56 relative overflow-hidden">
                                <!-- <img loading="lazy" src="https://images.unsplash.com/photo-1660795864713-41ec1c370ba2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDcxMzN8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMHBlYWNlYnVpbGRpbmclMjB3b3Jrc2hvcCUyMGhhbmRzJTIwbWVkaWF0aW9ufGVufDB8MHx8fDE3NjU1NTU3ODN8MA&ixlib=rb-4.1.0&q=80&w=1200" 
                                     alt="Facilitator and youth joining hands during a mediation workshop" 
                                     class="w-full h-full object-cover image-hover"> -->
                                <img loading="lazy" src="/jeredisteaching.jpeg" 
                                     alt="Facilitator and youth joining hands during a mediation workshop" 
                                     class="w-full h-full object-cover image-hover">
                                <div class="absolute top-4 left-4 px-4 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-blue-700 shadow-sm">Research</div>
                                <div class="absolute bottom-4 right-4 w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                                    <Icon icon="fa-solid:book-open" class="fas fa-book-open text-blue-600 text-xl" aria-hidden="true"/>
                                </div>
                            </div>
                            <div class="p-8">
                                <div class="flex items-center text-sm text-zinc-500 mb-4">
                                    <span class="flex items-center mr-6"><Icon icon="fa-solid:calendar" class="mr-2"/> May 15, 2023</span>
                                    <span class="flex items-center"><Icon icon="fa-solid:clock" class="mr-2"/> 5 min read</span>
                                </div>
                                <h3 class="text-xl font-bold text-zinc-900 mb-4 leading-tight">Youth-Led Peace Initiatives in Conflict Zones</h3>
                                <p class="text-zinc-600 mb-6 leading-relaxed">Exploring how young people are creating innovative solutions to longstanding conflicts in their communities through dialogue and collaboration.</p>
                                <a href="#" class="text-blue-600 font-medium flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1 py-1">
                                    Read Article <Icon icon="fa-solid:arrow-right" class="fas fa-arrow-right ml-3 group-hover:translate-x-2 transition-transform"/>
                                </a>
                            </div>
                        </div>
                        
                        <div class="bg-white rounded-2xl shadow-xl overflow-hidden card-hover fade-in" style="transition-delay: 0.2s">
                            <div class="h-56 relative overflow-hidden">
                                <!-- <img loading="lazy" src="https://images.unsplash.com/photo-1573497619860-6d82917e4ec8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDcxMzN8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGxlYWRlcnMlMjB3b3Jrc2hvcCUyMGNpcmNsZSUyMGRpc2N1c3Npb24lMjBpbmRvb3IlMjBjbGFzc3Jvb218ZW58MHwwfHx8MTc2NTU1NTc4Mnww&ixlib=rb-4.1.0&q=80&w=1200" 
                                     alt="Young leaders in a circle discussion during training" 
                                     class="w-full h-full object-cover image-hover"> -->
                                <img loading="lazy" src="/jeredis2.png" 
                                     alt="Young leaders in a circle discussion during training" 
                                     class="w-full h-full object-cover image-hover">
                                <div class="absolute top-4 left-4 px-4 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-amber-700 shadow-sm">Story</div>
                                <div class="absolute bottom-4 right-4 w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                                    <Icon icon="fa-solid:user-friends" class="fas fa-user-friends text-amber-600 text-xl" aria-hidden="true"/>
                                </div>
                            </div>
                            <div class="p-8">
                                <div class="flex items-center text-sm text-zinc-500 mb-4">
                                    <span class="flex items-center mr-6"><Icon icon="fa-solid:calendar" class=" mr-2"/> April 28, 2023</span>
                                    <span class="flex items-center"><Icon icon="fa-solid:clock" class="far fa-clock mr-2"/> 7 min read</span>
                                </div>
                                <h3 class="text-xl font-bold text-zinc-900 mb-4 leading-tight">From Adversaries to Allies: A Youth Dialogue Success Story</h3>
                                <p class="text-zinc-600 mb-6 leading-relaxed">How our mediation program transformed relationships between youth from opposing communities in the region through empathy and understanding.</p>
                                <a href="#" class="text-blue-600 font-medium flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1 py-1">
                                    Read Article <Icon icon="fa-solid:arrow-right" class="fas fa-arrow-right ml-3 group-hover:translate-x-2 transition-transform"/>
                                </a>
                            </div>
                        </div>
                        
                        <div class="bg-white rounded-2xl shadow-xl overflow-hidden card-hover fade-in" style="transition-delay: 0.3s">
                            <div class="h-56 relative overflow-hidden">
                                <!-- <img loading="lazy" src="https://images.unsplash.com/photo-1725618878496-233974f2fd59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MDcxMzN8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIweW91dGglMjBzdW1taXQlMjBjb25mZXJlbmNlJTIwc3RhZ2UlMjBhdWRpZW5jZXxlbnwwfDB8fHwxNzY1NTU1Nzg0fDA&ixlib=rb-4.1.0&q=80&w=1200" 
                                     alt="International youth peace summit on stage" 
                                     class="w-full h-full object-cover image-hover"> -->
                                <img loading="lazy" src="/jeredisvolontariat.png" 
                                     alt="International youth peace summit on stage" 
                                     class="w-full h-full object-cover image-hover">
                                <div class="absolute top-4 left-4 px-4 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-lime-700 shadow-sm">Event</div>
                                <div class="absolute bottom-4 right-4 w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                                    <Icon icon="fa-solid:calendar-alt" class="text-lime-600 text-xl" aria-hidden="true"/>
                                </div>
                            </div>
                            <div class="p-8">
                                <div class="flex items-center text-sm text-zinc-500 mb-4">
                                    <span class="flex items-center mr-6"><Icon icon="fa-regular:calendar" class="far fa-calendar mr-2"/> June 5, 2023</span>
                                    <span class="flex items-center"><Icon icon="fa-regular:clock" class="far fa-clock mr-2"/> 4 min read</span>
                                </div>
                                <h3 class="text-xl font-bold text-zinc-900 mb-4 leading-tight">Promouvons le volontariat en milieu scolaire</h3>
                                <p class="text-zinc-600 mb-6 leading-relaxed">A preview of our upcoming international gathering of young peacebuilders from around the world, featuring workshops, networking, and collaborative projects.</p>
                                <a href="#" class="text-blue-600 font-medium flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1 py-1">
                                    Read Article <Icon icon="fa-solid:arrow-right" class="fas fa-arrow-right ml-3 group-hover:translate-x-2 transition-transform"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- CTA Section -->
            <section id="donate" class="py-24 relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-lime-500"></div>
                <div class="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" aria-hidden="true"></div>
                <div class="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 blur-2xl" aria-hidden="true"></div>
                
                <div class="container mx-auto px-4 relative z-10">
                    <div class="max-w-4xl mx-auto text-center fade-in">
                        <h2 class="text-5xl font-bold text-white mb-8">Join the Movement for <span class="text-yellow-300">Peaceful Change</span></h2>
                        <p class="text-xl text-blue-100/90 mb-12 leading-relaxed max-w-3xl mx-auto">Your support enables us to train more youth peacebuilders, facilitate critical dialogues, and create lasting impact in communities worldwide.</p>
                        
                        <div class="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-8 mb-16">
                            <a href="#contact" class="px-10 py-5 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 hover:shadow-2xl transition-all duration-300 flex items-center justify-center group shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white">
                                <Icon icon="fa-solid:hand-holding-heart" class="mr-4 text-xl group-hover:scale-110 transition-transform"/> Become a Partner
                            </a>
                            <a href="#about" class="px-10 py-5 bg-yellow-400 text-blue-900 font-bold rounded-full hover:bg-yellow-300 hover:shadow-2xl transition-all duration-300 flex items-center justify-center group shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-yellow-300">
                                <Icon icon="fa-solid:user-graduate" class="mr-4 text-xl group-hover:scale-110 transition-transform"/> Join as Youth Ambassador
                            </a>
                        </div>
                        
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div class="glass-effect rounded-2xl p-6 backdrop-blur-sm card-hover">
                                <div class="text-3xl font-bold text-white mb-2">24/7</div>
                                <div class="text-blue-100/80 text-sm font-medium">Support Line</div>
                            </div>
                            <div class="glass-effect rounded-2xl p-6 backdrop-blur-sm card-hover">
                                <div class="text-3xl font-bold text-white mb-2">100%</div>
                                <div class="text-blue-100/80 text-sm font-medium">Transparent</div>
                            </div>
                            <div class="glass-effect rounded-2xl p-6 backdrop-blur-sm card-hover">
                                <div class="text-3xl font-bold text-white mb-2">UN</div>
                                <div class="text-blue-100/80 text-sm font-medium">Looking for affiliation</div>
                            </div>
                            <div class="glass-effect rounded-2xl p-6 backdrop-blur-sm card-hover">
                                <div class="text-3xl font-bold text-white mb-2">A+</div>
                                <div class="text-blue-100/80 text-sm font-medium">Accountability</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <!-- Footer -->
        <footer id="contact" class="bg-zinc-900 text-white py-16 scroll-mt-24">
            <div class="container mx-auto px-4">
                <div class="grid md:grid-cols-4 gap-10">
                    <div class="fade-in">
                        <div class="flex items-center space-x-3 mb-8">
                            <!-- <div class="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-lime-400 flex items-center justify-center shadow-lg float-animation" aria-hidden="true">
                                <Icon icon="fa-solid:dove" class="text-white text-xl"/>
                                 <img src="/former-logo.png" alt="" >
                            </div> -->
                            <div class=" from-blue-500 to-lime-400 flex items-center justify-center shadow-lg float-animation" aria-hidden="true">
                                <!-- <Icon icon="fa-solid:dove" class="text-white text-xl"/> -->
                                 <img loading="lazy" class="h-12 rounded-full" src="/former-logo.png" alt="" >
                            </div>
                            <span class="text-2xl font-bold">Jeredis</span>
                        </div>
                        <p class="text-zinc-400 mb-8 leading-relaxed">Empowering youth to become architects of peace in their communities and beyond through education, dialogue, and action.</p>
                        <div class="flex space-x-4">
                            <a href="https://x.com/AsblJeredis" class="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-black-600 transition-all duration-300 hover:scale-110 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" aria-label="Twitter">
                                <Icon icon="simple-icons:x"/>
                            </a>
                            <a href="https://www.facebook.com/jeredis2019" class="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:scale-110 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" aria-label="Facebook">
                                <Icon icon="fa-brands:facebook-f" class="fab fa-facebook-f"/>
                            </a>
                            <a href="https://www.instagram.com/jeredisasbl2019?igsh=MWU4b21qYnZudHRpdQ" class="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-pink-600 transition-all duration-300 hover:scale-110 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500" aria-label="Instagram">
                                <Icon icon="fa-brands:instagram" class="fab fa-instagram"/>
                            </a>
                            <a href="https://www.linkedin.com/in/jeredis-asbl-23a09936a" class="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-blue-500 transition-all duration-300 hover:scale-110 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" aria-label="LinkedIn">
                                <Icon icon="fa-brands:linkedin-in" class="fab fa-linkedin-in"/>
                            </a>
                        </div>
                    </div>
                    
                    <div class="fade-in" style="transition-delay: 0.1s">
                        <h3 class="text-xl font-bold mb-8">Quick Links</h3>
                        <ul class="space-y-4">
                            <li><a href="#home" class="text-zinc-400 hover:text-blue-400 transition-all duration-300 flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1 py-1">
                                <Icon icon="fa-solid:chevron-right" class="text-xs mr-3 opacity-0 group-hover:opacity-100 transition-opacity"/> Home
                            </a></li>
                            <li><a href="#about" class="text-zinc-400 hover:text-blue-400 transition-all duration-300 flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1 py-1">
                                <Icon icon="fa-solid:chevron-right" class="text-xs mr-3 opacity-0 group-hover:opacity-100 transition-opacity"/> About Us
                            </a></li>
                            <li><a href="#programs" class="text-zinc-400 hover:text-blue-400 transition-all duration-300 flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1 py-1">
                                <Icon icon="fa-solid:chevron-right" class="text-xs mr-3 opacity-0 group-hover:opacity-100 transition-opacity"/> Our Programs
                            </a></li>
                            <li><a href="#blog" class="text-zinc-400 hover:text-blue-400 transition-all duration-300 flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1 py-1">
                                <Icon icon="fa-solid:chevron-right" class="text-xs mr-3 opacity-0 group-hover:opacity-100 transition-opacity"/> Blog & Resources
                            </a></li>
                            <li><a href="#donate" class="text-zinc-400 hover:text-blue-400 transition-all duration-300 flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1 py-1">
                                <Icon icon="fa-solid:chevron-right" class="text-xs mr-3 opacity-0 group-hover:opacity-100 transition-opacity"/> Get Involved
                            </a></li>
                        </ul>
                    </div>
                    
                    <div class="fade-in" style="transition-delay: 0.2s">
                        <h3 class="text-xl font-bold mb-8">Contact Us</h3>
                        <ul class="space-y-6">
                            <li class="flex items-start group" title="Gihosha (Gisandema), Ntahangwa">
                                <Icon icon="fa-solid:map-marker-alt" class="fas fa-map-marker-alt text-blue-400 mt-1.5 mr-4 text-lg group-hover:scale-110 transition-transform" aria-hidden="true"/>
                                <span class="text-zinc-400 leading-relaxed">Bujumbura - Burundi</span>
                            </li>
                            <li class="flex items-center group">
                                <Icon icon="fa-solid:phone" class="text-blue-400 mr-4 text-lg group-hover:scale-110 transition-transform" aria-hidden="true"/>
                                <a href="tel:+25779916310" class="text-zinc-400 hover:text-blue-300">+257 79 91 63 10</a>
                            </li>
                            <li class="flex items-center group">
                                <Icon icon="fa-solid:envelope" class="fas fa-envelope text-blue-400 mr-4 text-lg group-hover:scale-110 transition-transform" aria-hidden="true"/>
                                <a href="mailto:info@jeredis.org" class="text-zinc-400 hover:text-blue-300">info@jeredis.org</a>
                            </li>
                        </ul>
                    </div>
                    
                    <div class="fade-in" style="transition-delay: 0.3s">
                        <h3 class="text-xl font-bold mb-8">Stay Updated</h3>
                        <p class="text-zinc-400 mb-6 leading-relaxed">Subscribe to our newsletter for the latest updates on peacebuilding initiatives and youth empowerment opportunities.</p>
                        <form @submit.prevent="subscribe" class="flex mb-3" aria-label="Newsletter subscription">
                            <label for="newsletter-email" class="sr-only">Your email address</label>
                            <input id="newsletter-email" v-model="email" type="email" required autocomplete="email" placeholder="Your email address" class="flex-grow px-5 py-3.5 rounded-l-xl bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-zinc-700 transition-all" />
                            <button type="submit" class="px-6 bg-gradient-to-r from-blue-500 to-lime-400 text-white font-medium rounded-r-xl hover:opacity-90 transition-all duration-300 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500" aria-label="Subscribe">
                                <Icon icon="fa-solid:paper-plane" class="fas fa-paper-plane text-lg"/>
                            </button>
                        </form>
                        <p v-if="subscribed" class="text-green-400 text-sm">Thanks for subscribing! Please check your inbox.</p>
                        <p class="text-zinc-500 text-sm">By subscribing, you agree to our Privacy Policy</p>
                    </div>
                </div>
                
                <div class="border-t border-zinc-800 mt-16 pt-10 text-center text-zinc-500 fade-in">
                    <p class="mb-4">&copy; {{ year }} Jeredis. All rights reserved.</p>
                    <!-- <div class="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-8">
                        <a href="#" class="text-zinc-500 hover:text-blue-400 transition-all duration-300">Privacy Policy</a>
                        <a href="#" class="text-zinc-500 hover:text-blue-400 transition-all duration-300">Terms of Service</a>
                        <a href="#" class="text-zinc-500 hover:text-blue-400 transition-all duration-300">Cookie Policy</a>
                        <a href="#" class="text-zinc-500 hover:text-blue-400 transition-all duration-300">Accessibility</a>
                    </div> -->
                    <p>Site Web developpé par <a class="text-blue-500" href="https://nsanzumukiza.netlify.app/" target="_blank"  rel="noopener noreferrer">Nsanzumukiza</a>.</p>
                </div>
            </div>
        </footer>
    </div>
</template>


<script setup lang="ts">
    import { reactive, ref, onMounted } from 'vue';
    import { Icon } from '@iconify/vue'

    const  mobileMenuOpen = ref(false);
    const  scrolled = ref(false);
    const animatedStats = reactive({ youthReached: 0, programs: 0, countries: 0, satisfaction: 0 });
    const statsTargets = reactive({ youthReached: 12500, programs: 320, countries: 45, satisfaction: 98 });
    const statsStarted = ref(false);
    const showVideo = ref(false);
    let videoSrc = ''
    let email =  ''
    let subscribed =  false

    const year = String(new Date()).slice(10,15)

    let comImg = null
    const comImgAlt = ref(false)



    //Functions
    function displayCommunityImage(){
        comImg.onload = function(){
            setTimeout(()=>{
                comImgAlt.value = true
            }, 5000)
            console.log("THe image loads")
            // comImg.style.opacity = '1';
        }
    }
    function toggleMobileMenu() { mobileMenuOpen.value = !mobileMenuOpen.value; }
    function closeMobileMenu() { mobileMenuOpen.value = false; }
    function onScroll() { scrolled.value = window.scrollY > 4; }
    function observeFadeIns() {
        const els = document.querySelectorAll('.fade-in');
        const io = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    obs.unobserve(entry.target);
                }
            });
        }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
        els.forEach(el => io.observe(el));
    }
    function animateStats() {
        const duration = 2000;
        const steps = 60;
        const interval = duration / steps;

        Object.keys(statsTargets).forEach(stat => {
            const target = statsTargets[stat];
            const stepValue = target / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += stepValue;
                if (current >= target) {
                    animatedStats[stat] = target;
                    clearInterval(timer);
                } else {
                    animatedStats[stat] = Math.floor(current);
                }
            }, interval);
        }); 
    }
    function observeStats() {
        const section = document.querySelector('section.bg-gradient-to-r');
        if (!section) return;
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !statsStarted.value) {
                    statsStarted.value = true;
                    animateStats();
                }
            });
        }, { threshold: 0.3 });
        io.observe(section);
    };
    function openVideo() {
        // Replace with your own video URL if needed
        const url = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0&modestbranding=1';
        const jeredisTestimonial = 'https://www.youtube.com/watch?v=cZ8yYp_gjPU'
        const jeredisTestimonialEmbed = 'https://www.youtube.com/embed/cZ8yYp_gjPU?autoplay=1&rel=3&modestbranding=1'
        videoSrc = jeredisTestimonialEmbed;
        showVideo.value = true;
        document.body.style.overflow = 'hidden';
    }
    function closeVideo() {
        showVideo.value = false;
        videoSrc = '';
        document.body.style.overflow = '';
    }
    function subscribe() {
        if (!email) return;
        subscribed = true;
        setTimeout(() => { subscribed = false; email = ''; }, 3500);
    }
    
    onMounted(() => {
        comImg = document.getElementById('comImg')

        displayCommunityImage()
        // Fade-in on scroll
        observeFadeIns();

        // Nav shadow on scroll
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });

        // Stats trigger when visible
        observeStats();

        // Close mobile menu on resize above md
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) mobileMenuOpen.value = false;
        });

        // Close video on ESC
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && showVideo) closeVideo();
        });
    });
</script>

<style>
    * { font-family: 'Inter', sans-serif; }
    html { scroll-behavior: smooth; }
    .hero{
        height: 100vh;
    }
    .gradient-bg { background: linear-gradient(135deg, #fefce8 0%, #f0f9ff 50%, #f7fee7 100%); }
    .hero-gradient { background: linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(163, 230, 53, 0.08) 50%, rgba(251, 191, 36, 0.08) 100%); }
    .card-hover { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
    .card-hover:hover { transform: translateY(-8px); box-shadow: 0 25px 50px -12px rgba(0,0,0,0.15); }
    .stat-counter { transition: all 1.5s cubic-bezier(0.4, 0, 0.2, 1); }
    .nav-link { position: relative; }
    .nav-link::after { content: ''; position: absolute; width: 0; height: 2px; bottom: -4px; left: 0; background: linear-gradient(to right, #3b82f6, #10b981); transition: width 0.3s ease; }
    .nav-link:hover::after { width: 100%; }
    .fade-in { opacity: 0; transform: translateY(20px); transition: opacity 0.8s ease, transform 0.8s ease; }
    .fade-in.visible { opacity: 1; transform: translateY(0); }
    .float-animation { animation: float 6s ease-in-out infinite; }
    @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
    .pulse-animation { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
    @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.7; } }
    .image-hover { transition: transform 0.5s ease, filter 0.5s ease; }
    .image-hover:hover { transform: scale(1.03); filter: brightness(1.05); }
    .glass-effect { background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2); }
    .text-gradient {
        background: linear-gradient(135deg, #3b82f6, #10b981, #f59e0b);
        -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    }
    .btn-glow { box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3); transition: all 0.3s ease; }
    .btn-glow:hover { box-shadow: 0 6px 25px rgba(59, 130, 246, 0.5); transform: translateY(-2px); }
    .animate-slideDown { animation: slideDown 0.3s ease-out; }
    @keyframes slideDown { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }
    @media (prefers-reduced-motion: reduce) {
        .float-animation, .pulse-animation, .card-hover:hover { animation: none !important; transform: none !important; }
        .fade-in, .image-hover, .btn-glow { transition: none !important; }
    }
</style>