<template>
    <header class="header header--bg">
        <div class="overlay">
            <nav class="nav">
                <div class="container">
                    <div class="nav__section">
                        <a class="nav__logo" href="">
                            <img alt="Vue logo" src="../assets/img/countlessmiles.svg">
                        </a>
                        <ul class="nav__menu">
                            <li class="nav__link"><a href="">About Us</a></li>
                            <li class="nav__link"><a href="">Blog</a></li>
                            <li class="nav__link"><a href="">Contact</a></li>
                        </ul>
                        <div class="mobile--hidden">
                            <button @click="goToRoute" class="btn btn__secondary">Get Early Access</button>
                        </div>
                    </div>
                </div>
            </nav>
            <section class="hero">
                <div class="container">
                    <div class="hero__body">
                        <h1 class="hero__title">If You Love Travel Travel Freedom is Here</h1>
                        <p class="hero__caption">Experience Travel-As-A-Service With Our End-To-End Trip Planning Platform</p>
                        <button @click="goToRoute" class="btn btn__secondary btn__hero">Get early access
                            <svg width="5" height="8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M.19 7.783a.727.727 0 0 0 .517.216.644.644 0 0 0 .494-.192l3.384-3.271a.747.747 0 0 0 .215-.53.76.76 0 0 0-.215-.528L1.2.207A.704.704 0 0 0 .69 0a.692.692 0 0 0-.5.23.731.731 0 0 0 .023 1.01l2.843 2.767L.214 6.773a.73.73 0 0 0-.024 1.01z" fill="#039785"/>
                            </svg>
                        </button>
                    </div>         
                </div>
            </section>
            <div class="container">
                <div class="hero__controls">
                    <a class="">Prev</a>
                    <div class="progress-level">
                        <span class="progress-level__active">01</span>
                        <span class="progress-level__total">03</span>
                        <span class="bar"></span>
                    </div>
                    <a class="">Next</a>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        goToRoute() {
            this.$router.push('/early-access');
        }
    }
}
</script>
