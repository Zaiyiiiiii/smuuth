import { SaladPiece } from "./SaladPiece"
import axios from "axios"
// import request from "NeteaseCloudMusicApi/util/request"
// import login from "NeteaseCloudMusicApi/module/login_cellphone"
// import login_status from "NeteaseCloudMusicApi/module/login_status"
// import userPlaylist from "NeteaseCloudMusicApi/module/user_playlist"
// import playlistSongs from "NeteaseCloudMusicApi/module/playlist_detail"
// import songUrl from "NeteaseCloudMusicApi/module/song_url"
// import search from "NeteaseCloudMusicApi/module/search"

export class Netease extends SaladPiece {
    constructor(...args) {
        super(...args)
        this.name = "netease"
    }
    // name = netease
    async getAuth(phone, pass) {
        const userinfo = await axios.post("/api/netease/login/cellphone", { phone: phone, password: pass })
        const result = {
            userinfo: userinfo.data,
            auth: document.cookie
        }
        return result
    }

    async getUserPlaylists() {
        const auth = (await this.salad.authDB.get(this.name))
        if (!auth) {
            throw new Error("No auth found")
        }
        console.log(auth)
        let result = await axios.post(`/api/netease/user/playlist?uid=${auth.userinfo.account.id}`)
        return result.data.playlist
    }
}