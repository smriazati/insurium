export const state = () => ({
    email: '',
    id: '',
    emailVerified: '',
    shows: '',
    showsLoadError: ''
})

export const actions = {
    async fetchShows({ commit, state }) {
        const ref = this.$fireStore.collection('users').doc(state.id).collection('movies');
        try {
            await ref.onSnapshot(snapshot => {
                const snapData = [];
                snapshot.forEach(doc => {
                snapData.push({
                    data: doc.data(),
                    id: doc.id
                    });
                });
                commit("setUserShows", snapData);
                // console.log(snapData);
            });
        } catch (e) {
            console.log(e);
            return
        }
    },
    async logout ({ commit }) {
        await this.$fireAuth.signOut();
    }
}

export const mutations = {
    setUserShows: (state, payload) => {
       state.shows = payload;
    },
    ON_AUTH_STATE_CHANGED_MUTATION: ( state, { authUser, claim }) => {
        if (!authUser) {
            state.email = null;
            state.id = null;
            state.emailVerified = null;
            state.shows = null;
            state.showsLoadError = null;
        } else {
            // console.log('auth user', authUser);
            // console.log('claims', claims);
            // console.log('userInfo', userInfo);
            // modify state
            const userInfo = {
                id: authUser.uid,
                email: authUser.email,
                emailVerified: authUser.emailVerified
            }
            state.id = userInfo.id;
            state.email = authUser.email;
            state.emailVerified = userInfo.emailVerified;
        }
    }   
}

