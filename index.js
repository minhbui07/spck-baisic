 w3.slideshow(".slides", 1500);
//  Slide hoạt động pháo hoa
 let slidePhaoHoa = document.getElementById('imgPhaoHoa');
 
 let imagesPhaoHoa = [
     'https://cms.thainguyen.vn/documents/130230/14097400/z4994971342181_f1909723e91d909e190f957927cedea9.jpg',
     'https://baothainguyen.vn/file//oldimage/baothainguyen/UserFiles/image/11111(27)(1).jpg',
     'https://tisco.com.vn/sites/default/files/nhavanhoa_0.jpg',
     'https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/404471914_308819862018355_6710260902050527187_n.jpg?stp=dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGJF0OqObMTOY4zKYJhb-T0Sq119oc9NqZKrXX2hz02ppQBGMP17uHsrMb54wRYQFlT7BOs9L_CfpX45p5lQZcN&_nc_ohc=att1qjmqDxAAX-gZwpP&_nc_ht=scontent.fhan3-3.fna&oh=00_AfBypvYlF78lzi2PnVHJ5Csfl2OqSed8RWkQQGrk3u3x1A&oe=65B9FD78',
     'https://scontent.fhan3-4.fna.fbcdn.net/v/t39.30808-6/422174635_785472963626549_6472516727431999528_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=c42490&_nc_eui2=AeEVQezxcE22SGJZSF21eMoVAaG1tdMdomMBobW10x2iY1uCdAKnt1lt1QmGOoR4y5h9EBSbL4hFwerwUotdybVC&_nc_ohc=37wkqZy58P4AX_FnM1j&_nc_ht=scontent.fhan3-4.fna&oh=00_AfA-ouSd-D4Yt7ksSQ_EByuJvhdtRy2rgChjwdOGpV_lSQ&oe=65B97798',
     ''
 ]
 let i = 0;
 slidePhaoHoa.src = imagesPhaoHoa[i];
 function pre1 () {
     i = i - 1;
     if (i < 0) {
         i = imagesPhaoHoa.length-1;
     }
     slidePhaoHoa.src = imagesPhaoHoa[i];
 }
 
 function next1 () {
     i = i + 1;
     if (i == imagesPhaoHoa.length) {
         i = 0;
     }
     slidePhaoHoa.src = imagesPhaoHoa[i];
 }

 //  Slide hoạt động lễ hội
 let slideLeHoi = document.getElementById('imgLeHoi');
 
 let imagesLeHoi = [
     'http://thainguyentourism.vn/uploads/news/2020_01/2211.jpg',
     'http://thainguyentourism.vn/uploads/news/2019_02/16.jpg',
     'https://thainguyen.gov.vn/documents/130230/10050742/Khai+hoi+2+%28Anh+dai+dien%29.jpg/52c8adda-e000-4887-a100-9f11ab591df8?t=1675154376521',
     'https://media.vnptit3.vn/resources/portal/Images/TNN/ngoclinh.tnn/Ch%C3%B9aHang/z4097844725157_f2ce04d7cc216322731db0c42a16673d_638119868288059535.jpg',
     'https://media.vnptit3.vn/resources/portal/Images/TNN/sovhttdl.tnn/092021/t3/5_637673784345072659.jpg'
 ]
 let j = 0;
 slideLeHoi.src = imagesLeHoi[j];
 function pre2 () {
     j = j - 1;
     if (j < 0) {
         j = imagesLeHoi.length-1;
     }
     slideLeHoi.src = imagesLeHoi[j];
 }
 
 function next2 () {
     j = j + 1;
     if (j == imagesLeHoi.length) {
         j = 0;
     }
     slideLeHoi.src = imagesLeHoi[j];
 }

 //  Slide hoạt động đi chùa
 let slideDiChua = document.getElementById('imgDiChua');
 
 let imagesDiChua = [
     'https://image.giacngo.vn/w770/Uploaded/2024/estnselxslt/2023_01_23/chua-phuc-lam-o-tp-bien-hoa-ngay-mong-mot-tet-anh-cua-thuong-toa-thich-minh-tri-6340.jpg',
     'https://daithainguyen.vn/UserFiles/image/123(49)(418).jpg',
   
 ]
 let k = 0;
 slideDiChua.src = imagesDiChua[k];
 function pre3 () {
     k = k - 1;
     if (k < 0) {
         k = imagesDiChua.length-1;
     }
     slideDiChua.src = imagesDiChua[k];
 }
 function next3 () {
    k = k+ 1;
    if (k == imagesDiChua.length) {
        k = 0;
    }
    slideDiChua.src = imagesDiChua[k];
}
//
let slidekhac= document.getElementById('imgkhac');
 
    let imageskhac= [
       "https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/326132211_489693200019857_3228588407666014865_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeGqh2DOU-ug9Z75hhe2E92EZmpTG64hL2RmalMbriEvZDtciCEsUz_wgWyvlM4DKn6bDGSy1OIQF7yrcWHNg2We&_nc_ohc=StxUullGQyIAX9st54s&_nc_ht=scontent.fhan3-3.fna&oh=00_AfBYXg9cpm9Y2BoWPAeBHylrvmANNdDDVme_LtZK-Msu2w&oe=65BA3664",
       "https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-6/324260208_894797338435821_1623345875199973162_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeENGpsEJ2rJq7Ei1p5uzi10VssLEWfJI6JWywsRZ8kjoldhe9n0E8hs3cI2zFgVLEamCsdP3eUVyzmLn_ElUCAX&_nc_ohc=vhgnZroNFYMAX9d8BHd&_nc_ht=scontent.fhan4-1.fna&oh=00_AfByfe0IVLG7VgDHCvEiDAnXcQOA-MfaLKvRAc6Nxogfbw&oe=65BAB369" ,
       "https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-6/325964845_1109565463071702_3017429472777111563_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeHWsnmUX7IXzcHUP_ZpS846jlbIhCQu3uCOVsiEJC7e4Ng1NRUteKCYLEeoZ66NjYvg6_1teRhP9qxagzh2cTkL&_nc_ohc=Kd4QGDGEIXMAX8YEkzw&_nc_ht=scontent.fhan3-2.fna&oh=00_AfCw7cotDSpltISaIaz533yVt6s_aIhOksWpXSJ0Gj60BQ&oe=65B94078", 
       "https://scontent.fhan3-4.fna.fbcdn.net/v/t39.30808-6/325914640_2552861834854990_2735897535544603372_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeEXvlIIoDjYwRb-RqUUbjUVZoqseR3R4bBmiqx5HdHhsHtWGQRe8tBuQ7qODrkoZBymPMhSBOKm57Q2SdHCSfsN&_nc_ohc=8fetcK3Pi_QAX_H1oCA&_nc_oc=AQnPcA8uPUeAFuHdMwBJ8dQNOdVXA2vVj-t0CfDEO59i_dPRhFRDQSudUnVliSA88P624wpN2SIrglyPXx00Cz1J&_nc_ht=scontent.fhan3-4.fna&oh=00_AfD_aN710xJNjznkIaMjmLxPt6ule_2OmrMybZMZ3jSBeg&oe=65BA50B2" ,
       "https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/325578101_888941188903923_5591048709029987041_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeFsgWq2tds0YwP3xXdnhwuMrSewhh7KT8StJ7CGHspPxCbkbzDTO7WisCK0tlksHeKzYmh08eRZvCw7Gph1j1Bc&_nc_ohc=Btx1B5H-25MAX_fP8Wp&_nc_ht=scontent.fhan3-3.fna&oh=00_AfA4w6mae5xxeay9qMu_KgVNlPnPVOr2wrmxbgTKASk9Iw&oe=65B97599" ,
       "https://scontent.fhan3-4.fna.fbcdn.net/v/t39.30808-6/323117483_684061906792971_7016556523946995619_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeGE57az9j-4wfn5HNtF3Nva3jHo5m9LiSreMejmb0uJKp9Q_U1BTp07wQ-hD2kJD_7U_x2Qwc6ooJbxTCXHqR5E&_nc_ohc=XK6Ce-aB5KIAX_mmemb&_nc_ht=scontent.fhan3-4.fna&oh=00_AfC-3unMmobK-Ha-Fu7mrGxiAtHLA0K7BqrTn70KF3iqwg&oe=65BAC29A" ,
   
    ]
    let l = 0;
    slidekhac.src = imageskhac[l];
    function pre4 () {
        l = l - 1;
        if (l < 0) {
            l = imageskhac.length-1;
        }
        slidekhac.src = imageskhac[l];
    }
    function next4() {
       l = l+ 1;
       if (l== imageskhac.length) {
           l= 0;
       }
       slidekhac.src = imageskhac[l];
   }
   
