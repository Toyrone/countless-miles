<template>
    <main class="access">
        <header>
            <nav>
                <div  class="container">
                    <div class="form__nav">
                        <a class="nav__logo" href="">
                            <img alt="Vue logo" src="../assets/img/countlessmiles.svg">
                        </a>
                        <button @click="() => $router.push('/')">
                            <svg width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.543 7.957L9.586 11l-3.043 3.043a1 1 0 0 0 1.414 1.414L11 12.414l3.043 3.043.001.002a1.002 1.002 0 0 0 1.707-.71.993.993 0 0 0-.296-.707L12.415 11l3.042-3.043a.998.998 0 0 0-.707-1.707.994.994 0 0 0-.709.295l-3.04 3.04-3.044-3.042A.999.999 0 1 0 6.54 7.956l.002.001zM11 19.375c-4.618 0-8.375-3.758-8.375-8.375 0-4.618 3.757-8.375 8.375-8.375 4.617 0 8.375 3.757 8.375 8.375 0 4.617-3.758 8.375-8.375 8.375zM21.375 11C21.375 5.28 16.721.625 11 .625 5.28.625.625 5.279.625 11c0 5.72 4.654 10.375 10.375 10.375 5.72 0 10.375-4.654 10.375-10.375z" fill="#fff" stroke="#fff" stroke-width=".75"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
        
        <section>
            <form v-if="!submitted" class="form" action="">
                <h3 class="form__title">Get Early access</h3>
                <div v-if="formIndex === 1 || showAll" class="form-group">
                    <label class="form-label" for="name">Tell Us Your Name</label>
                    <input v-model="formData.name" id="name" type="text" class="form-control">
                </div>
                <div v-if="formIndex === 2 || showAll" class="form-group">
                    <label class="form-label" for="email">Your email Address</label>
                    <input v-model="formData.email" type="email" class="form-control" id="email">
                </div>
                <div v-if="formIndex === 3 || showAll" class="form-group">
                    <label class="form-label" for="location">Your Location</label>
                    <input v-model="formData.location" type="text" class="form-control" id="location">
                </div>
                <div v-if="formIndex === 4 || showAll" class="form-group">
                    <label class="form-label" for="preference">Your Travel Preference</label>
                    <input v-model="formData.preference" type="text" class="form-control" id="preference">
                </div>
                <div v-if="!showAll" class="form__footer">
                     <button @click="prev" class="btn btn--inline btn--caps">
                        back
                    </button>
                    <button @click="next" class="btn btn--inline btn--caps">
                        next
                    </button>
                </div>
                <button v-else @click="submit" class="btn btn--inline btn--caps">
                    submit
                </button>
                
            </form>
            <div v-else>
                <h5 class="access__success">Early Access has been granted! Kindly check your mail for updates.</h5>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    name: 'AccessRoute',
    data() {
        return {
            formData: {},
            showAll: false,
            formIndex: 1,
            submitted: false
        }
    },
    methods: {
        next() {
            if (this.formIndex < 4) {
                this.formIndex += 1;
            } else this.showAll = true;
        },
        prev() {
            this.formIndex -= 1;
        },
        submit() {
            this.submitted = true;
            setTimeout(() => {
                this.$router.push('/');
            }, 3000);
        }
    }

}
</script>

<style lang="scss" scoped>
.access {
    background: $green;
    min-height: 100vh;
    color: $white;
    .form {
        max-width: 60%;
        margin: 0 auto;
        &__title {
            font-weight: bold;
            font-size: 1.875rem;
            margin-bottom: 2.6em;
        }
        &-label {
            margin-bottom: 1em;
            font-size: 1.125rem;
        }
    }
    &__success {
        max-width: 30%;
        margin: auto;
        text-align: center;
    }
    .btn--caps {
        &:not(:last-of-type) {
            font-weight: normal;
            margin-right: 1em;
        }
    }
    .form-control {
        color: $white;
        height: 50px;
        background: transparent;
        margin-bottom: 2rem;
        caret-color: $white;
    }
}
</style>
