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

import hay_trao_cho_anh_img from '../../assets/images/hay_trao_cho_anh.jpg'
import hay_trao_cho_anh_mp3 from '../../assets/mp3/hay_trao_cho_anh.mp3'

import chua_bao_gio_em_quen_img from '../../assets/images/chua_bao_gio_em_quen.jpg'
import chua_bao_gio_em_quen_mp3 from '../../assets/mp3/chua_bao_gio_em_quen.mp3'

import chi_la_khong_cung_nhau_img from '../../assets/images/chi_la_khong_cung_nhau.jpg'
import chi_la_khong_cung_nhau_mp3 from '../../assets/mp3/chi_la_khong_cung_nhau.mp3'

import la_ai_tu_bo_la_ai_vo_tinh_img from '../../assets/images/la_ai_tu_bo_la_ai_vo_tinh.jpg'
import la_ai_tu_bo_la_ai_vo_tinh_mp3 from '../../assets/mp3/la_ai_tu_bo_la_ai_vo_tinh.mp3'

import ghe_qua_img from '../../assets/images/ghe_qua.jpg'
import ghe_qua_mp3 from '../../assets/mp3/ghe_qua.mp3'

const initialState = [
    {
        id: 1,
        name: 'Ghé Qua',
        mp3: ghe_qua_mp3,
        image: ghe_qua_img,
        singer: 'Dick x PC x Tofu',
    },
    {
        id: 2,
        name: 'Thay Tôi Yêu Cô Ấy',
        mp3: thay_toi_yeu_co_ay_mp3,
        image: thay_toi_yeu_co_ay_img,
        singer: 'Thanh Hưng',
    },
    {
        id: 3,
        name: 'Hãy Trao Cho Anh',
        mp3: hay_trao_cho_anh_mp3,
        image: hay_trao_cho_anh_img,
        singer: 'Sơn Tùng M-TP',
    },
    {
        id: 4,
        name: 'Hỏi Thăm Nhau',
        mp3: hoi_tham_nhau_mp3,
        image: hoi_tham_nhau_img,
        singer: 'Lê Bảo Bình',
    },
    {
        id: 5,
        name: 'Tình Thương Phu Thuê Remix',
        mp3: tinh_thuong_phu_thue_remix_mp3,
        image: tinh_thuong_phu_thue_remix_img,
        singer: 'Chí Hướng',
    },
    {
        id: 6,
        name: 'Yêu Vội Vàng',
        mp3: yeu_voi_vang_mp3,
        image: yeu_voi_vang_img,
        singer: 'Lê Bảo Bình',
    },
    {
        id: 7,
        name: 'Ai Là Người Thương Em',
        mp3: ai_la_nguoi_thuong_em_mp3,
        image: ai_la_nguoi_thuong_em_img,
        singer: 'Quân A.P',
    },
    {
        id: 8,
        name: 'Hết Thương Cạn Nhớ',
        mp3: het_thuong_can_nho_mp3,
        image: het_thuong_can_nho_img,
        singer: 'Đức Phúc',
    },
    {
        id: 9,
        name: 'Chưa Bao Giờ Em Quên',
        mp3: chua_bao_gio_em_quen_mp3,
        image: chua_bao_gio_em_quen_img,
        singer: 'Hương Ly',
    },
    {
        id: 10,
        name: 'Chỉ Là Không Cùng Nhau',
        mp3: chi_la_khong_cung_nhau_mp3,
        image: chi_la_khong_cung_nhau_img,
        singer: 'Tăng Phúc x Trương Thảo Nhi',
    },
    {
        id: 11,
        name: 'Là Ai Từ Bỏ, Là Ai Vô Tình',
        mp3: la_ai_tu_bo_la_ai_vo_tinh_mp3,
        image: la_ai_tu_bo_la_ai_vo_tinh_img,
        singer: 'Hương Ly',
    },
]
const musicReducer = (state = initialState, action) => {
    switch(action){
        default: return [...state]
    }
}

export default musicReducer