import thay_toi_yeu_co_ay_img from '../../assets/images/thay_toi_yeu_co_ay.jpg'
import thay_toi_yeu_co_ay_mp3 from '../../assets/mp3/thay_toi_yeu_co_ay.mp3'

import hoi_tham_nhau_img from '../../assets/images/hoi_tham_nhau.jpg'
import hoi_tham_nhau_mp3 from '../../assets/mp3/hoi_tham_nhau.mp3'

import het_thuong_can_nho_img from '../../assets/images/het_thuong_can_nho.jpg'
import het_thuong_can_nho_mp3 from '../../assets/mp3/het_thuong_can_nho.mp3'

import yeu_voi_vang_img from '../../assets/images/yeu_voi_vang.jpg'
import yeu_voi_vang_mp3 from '../../assets/mp3/yeu_voi_vang.mp3'

import ai_la_nguoi_thuong_em_img from '../../assets/images/ai_la_nguoi_thuong_em.jpg'
import ai_la_nguoi_thuong_em_mp3 from '../../assets/mp3/ai_la_nguoi_thuong_em.mp3'

import tinh_thuong_phu_thue_remix_img from '../../assets/images/tinh_thuong_phu_thue_remix.jpg'
import tinh_thuong_phu_thue_remix_mp3 from '../../assets/mp3/tinh_thuong_phu_thue_remix.mp3'

const initialState = [
    {
        id: 1,
        name: 'Thay Tôi Yêu Cô Ấy',
        mp3: thay_toi_yeu_co_ay_mp3,
        image: thay_toi_yeu_co_ay_img,
        singer: 'Thanh Hưng',
    },
    {
        id: 2,
        name: 'Hỏi Thăm Nhau',
        mp3: hoi_tham_nhau_mp3,
        image: hoi_tham_nhau_img,
        singer: 'Lê Bảo Bình',
    },
    {
        id: 3,
        name: 'Tình Thương Phu Thuê Remix',
        mp3: tinh_thuong_phu_thue_remix_mp3,
        image: tinh_thuong_phu_thue_remix_img,
        singer: 'Chí Hướng',
    },
    {
        id: 4,
        name: 'Yêu Vội Vàng',
        mp3: yeu_voi_vang_mp3,
        image: yeu_voi_vang_img,
        singer: 'Lê Bảo Bình',
    },
    {
        id: 5,
        name: 'Ai Là Người Thương Em',
        mp3: ai_la_nguoi_thuong_em_mp3,
        image: ai_la_nguoi_thuong_em_img,
        singer: 'Quân A.P',
    },
    {
        id: 6,
        name: 'Hết Thương Cạn Nhớ',
        mp3: het_thuong_can_nho_mp3,
        image: het_thuong_can_nho_img,
        singer: 'Đức Phúc',
    },
]
const musicReducer = (state = initialState, action) => {
    switch(action){
        default: return [...state]
    }
}

export default musicReducer