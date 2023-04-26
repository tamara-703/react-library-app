

const categories = [
    {
        Fiction: [
                {
                    book: "Six: blood brothers",
                    thumbnail: "http://books.google.com/books/publisher/content?id=OGaCDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70XlkHGWkyNnc8mNRUuko_G4pDFNB4aCd5vEFYaMZ9TS6sM7pXxwKEReA_P3bqZgxJe16MlLmWbasopUOB7PrZ_1wascZqV11S9fqJBMxuwerVeQWkMmxzxnqGu0fZ4tZwK5sVJ&source=gbs_api",
                },
                {
                    book: "King of wrath",
                    thumbnail: "http://books.google.com/books/content?id=ILuBzwEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73aKn57PshOGAbprw67Bwm8ygaMowPKVbJJT13tCPWWWxTAyECsqt2JrPcO4uea9NM_swnEF7wPLFwCsilFcDCJH1d4u28ybRfrJC_TVqgx12Qfu29xysx8g1JB886dinCz1-0M&source=gbs_api",
                },
                {
                    book: "Happy Place",
                    thumbnail: "http://books.google.com/books/content?id=DKreoAEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72QYjGgGflsq3Fp2mxFiuLmQfrEVczZDDbguZ93MwZZRSJlcKRV8IvhDNJ1kwJAWLbEoriE1ZKV3mcI6avwSC2Ou7z20w5biz4sLSPK4AkJmfOjGSNKSlYRp9XN3zcZIB-G0zp5&source=gbs_api",
                },
                {
                    book: "In the lives of puppets",
                    thumbnail: "http://books.google.com/books/content?id=FIVrEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
                },
                {
                    book: "Shadow Fallen",
                    thumbnail: "http://books.google.com/books/publisher/content?id=bREqEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72NwOE_YTKzhHO4SutHzAq-1Sf6TNxIt-BzfKYzSo9y1roI_G5Q_KUPLowaKGIi9r4AYCzoZTAsKtOqCmvrV7mzh8yl_QtDV7ZIW95BbAH7yVVPXSvo8FESmRcvu9Sd60BKFHe6&source=gbs_api",
                },
                {
                    book: "The Golden Doves",
                    thumbnail: "http://books.google.com/books/publisher/content?id=kQd8EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73KV1jCA0KAsY1_6m6g8orj9r4nP9qvQU7yJCMetWgqvtZF-qRU8Qrg7UadtXQ86pg7WGn6Em4VBhBlH597uHRlu0OOKhwwHwZkWUSK6imAVNNLb5L04y6iWPyAAw_q9kzdHmGG&source=gbs_api",
                },
                {
                    book: "Dare You To Hate Me",
                    thumbnail: "http://books.google.com/books/content?id=awV0zwEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73gzZaU1NR9USF01-YwBa0H0y7NEOyz-hEanQYqTCGBfxBZbixSTVbzJMN4R43RkUtb7z7IR8MPR8ZoNzYLRjAhKOhmbinay6tBPr5UFaMYpbFuhDAWYfjEKv7WeSxVFv4DxrM7&source=gbs_api",
                },
                {
                    book: "Tress of The Emerald Sea",
                    thumbnail: "http://books.google.com/books/publisher/content?id=EzSiEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70EJ6Wxa1irNVhJOO77VKjV7iA9XDiTXQLLeGRn5jJI0XcuP7xpVegvXbsQqBRxKnkMCywc5EwD8Rl7bVwcKSmStUYoOxZ6o6II_ZqSJMdPHKv9ECO30QRIgYHnK5Gwehvhlb7H&source=gbs_api",
                },
                {
                    book: "Empire of The Vampire",
                    thumbnail: "http://books.google.com/books/publisher/content?id=Ah0QEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71Z_FjmId4Vh29cet8v0ultD9vWUoQd8ywum1oEoXq3tBxyOwJHE1qMgzFnG4YgzAAbmned3r490S7Vk64tFuVo-T6bw_V7feqGwNnBH0RWMvPmIFylqBBAKC7KsRM_zUzYLv51&source=gbs_api",
                },

            ],

        NonFiction:    [
                {
                    book: "The half of it",
                    thumbnail: "http://books.google.com/books/content?id=HcMMAAAACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73q_TK-TwVGGwp8Vibh-_46S2w1xjG7o94qUvLZHk1evM11N0NjnMIxOnfUmSe-B2fTTY7n1vgC7EKH8wmzmV_dL5emxud3CwGXHHfqMzF74tpYAtTx--07cT6Jdk_YE_x_DUJo&source=gbs_api",

                },
                {
                    book: "Soul Boom",
                    thumbnail: "http://books.google.com/books/publisher/content?id=RcN_EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE700pOnwfJk4VbLPYA5Jjj8Q1D2ncQKpx9Yk-ZA_4SrwHVyeWLFUUWhsiyV3_ZnvSZST04lMLZVsUNoP0CvQ2KXItaEt2CXaiKHRtw-OYdEIqgSi4495BcQQIX9Zg8SrDEi-a3bU&source=gbs_api",
                },
                {
                    book: "Help is on the way",
                    thumbnail: "http://books.google.com/books/publisher/content?id=bKIlDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71VTVp369g1Vh8UNrV9_KACyEv9jxNEqmKSBlXdLTgKULLV4cGyz1NLYJUNWA7V_GFyq2RZFX0fSxl5svZ9qma1dZvY_9yqmyiLBOo0HvhfJntbuYcuzHZupJxsCoNOBA2DCYlo&source=gbs_api",
                },
                {
                    book: "Nine lives and counting",
                    thumbnail: "http://books.google.com/books/content?id=oEjZtAEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70HQ_aQltXgB894fVm6JStvqukLQPAo6r897EyPzEzpwJFdL02weZ3_mmcjWePT35LLsHqD2CLzczQ1Is1bCZNS0b59mpSxfXRrvFKPjZxGa8rr_GLHQocxZoDL8ERh9WaXNrQD&source=gbs_api",
                },
                {
                    book: "Chicken Soup For the Soul",
                    thumbnail: "http://books.google.com/books/content?id=WyIcyatfKm0C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73mZjN9Uh6XWVW_JEKqbjphLjCi1HGsQqSmguvHg0G3RrxPsmDuLxY-cIiQSNHqnKP-3tbvCt10LyfOlDqzq8S85XYxe8eSkQefdNXxoBrpNg_UuZ04VyxVndbNOA2aSaMXbbOb&source=gbs_api",
                },
                {
                    book: "You can't joke about that",
                    thumbnail: "http://books.google.com/books/publisher/content?id=34WAEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71iFJV2naq7Nw6_XrQZ0M6XzhuUnnkw5tWhTT5dH5GTZUNc_tzYt81U1UfOj0eEPCucmjmtGR7xIxxtBahBvkKPxOk8kW-k2aaqPXz0k2WQsk8w2KW2LPxXmQZeQffQ1J9H7xob&source=gbs_api",
                },
                {
                    book: "The Wager",
                    thumbnail: "http://books.google.com/books/content?id=rYDbzQEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE7221B9zR-HdfJHR74jDqgNqZclSH_I4dv4sw1mGPDuAJmH77QpH4wZGC69WMuAdEAyxc4kQP69p5-okQQs8r_KgGyLm-qwt0sprjhPdsjc8vObnvY1RN4PtdJozlhkN9UheMWsC&source=gbs_api",
                },
                {
                    book: "Collecting Confidence",
                    thumbnail: "http://books.google.com/books/publisher/content?id=Nc53EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE716Y37Kbjo0MgIO1ZzNU3vzBBhfGFpbIArTjkZ5f3y29Xlhx-nPLkp_si9PeJkOZmkALW8L3fjrm922eRyTtlgM07rKNg9TI23d_a6ugQfPAOI1Pt3RtYOpYr-Gc4Tf44QinryS&source=gbs_api",
                },
                {
                    book: "All in",
                    thumbnail: "http://books.google.com/books/content?id=XEXZaiRmJUwC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70p1knTT117VXcqewEZtvWzM0fPagWcZzy9W4UI3Ow8G9Fx7E1AGx2dollEnGOgNE2P397Gm-6kH3GZD8LaKWDvjvFchZofERAb2pl0kNSvQP3aA0woiNzmVcnbMdCEfmKbdi5j&source=gbs_api",
                }

            ],

        Fantasy: [
            {
                book: "Neon Gods",
                thumbnail: "http://books.google.com/books/content?id=G0HBzQEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72I73GhnNwHYDLvg8uxxXmysqruG55839Hfyr4b6i0Mdv_TlP06iXz98eNHtkuAgLK_6q99Z36gUYWlbgRrcrV8rkNEW1cecHoddJPLkGdLNGT7Mvw7iNRgiftm1KY60nL2-dON&source=gbs_api",
            },
            {
                book: "The Coven",
                thumbnail: "http://books.google.com/books/content?id=ZsT-swEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72dTX1jbo-h7ZKVT2F-M6J-n7zMw7Yf5GrhNjjjHZKXoQNHoxWB6-2JhpTskML5riUvMbENzHaK12zVjGLUtMs3ZYPQprFqkXym1-tqnV_dGYJfCea1IPAKHpujmA7tIUZaaWjo&source=gbs_api",
            },
            {
                book: "Lies We Sing To The Sea",
                thumbnail: "http://books.google.com/books/publisher/content?id=xqJzEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70AAZeqCmeAYCYQWG5Z4UepC5bHYCnOybKiS24IpZIVw_F02yFDmKf_SfwuQo7DIGSdfFT_ufMNsu2cdTEa_gvnMjnylEk6pMrrxlUap6STyl6XunUSjBxEgLIKm-_bWh2HfSkg&source=gbs_api",
            },
            {
                book: "Pale Kings",
                thumbnail: "http://books.google.com/books/content?id=btlMYuGUBzkC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72SatUct5-oNR9q-sEGYHrsbWZiwam8hHguCLzg-OfOGkoyg0Hce3TrIrKTnTY3-0t5kCetld5YFKaIlvtv0nYB3vXPssBCzjhQInDZAaTW0PuXD8-p4-bgjxcOd2P47yNiQnvM&source=gbs_api",
            },
            {
                book: "My Dear Henry",
                thumbnail: "http://books.google.com/books/publisher/content?id=HpRhEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72OErLNw1NaJpj8SE-mYKEquL1KImYJFHaEmY9WLFNLDlYgyroP7nWBqP2sDrS3dZyjHKm_R6bzSIiMTdXmffeKQgctdgDfHqTlUr0NMI_cYXQ2cqDuNk3k3xG5Uj_PlubWSUDD&source=gbs_api",
            },
            {
                book: "Heir Of Uncertain Magic",
                thumbnail: "http://books.google.com/books/content?id=6YI5zwEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70wZ5T7_AX1aklxKBnR8MLxCwkXULJpXcfuXFUUmVnmVVZlVGjG2zHpsb8q2PfGH1vp_mbwPy1tCgD1OuxhRWqRH-_Agcz-6cc_g5xk3K6OD1Y506pmSPS_ds2E3p3ZTQS488nA&source=gbs_api",
            },
            {
                book: "The Moth Keeper",
                thumbnail: "http://books.google.com/books/publisher/content?id=pQV3EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72uWCW2xciH8oOtOn_OrZfqyMooTjzAKuM_aXMNo4-mMTHo4_z_7m2jIYPYfM8mmbaCwjzAa4GYKEm9cD6NF6tdocmKYxkQ9vLVJ-qZOFIu3QfeaNFv_ItFYu18ANIpgSS29Bzh&source=gbs_api",
            },
            {
                book: "Mountains Made Of Glass",
                thumbnail: "http://books.google.com/books/publisher/content?id=w8ypEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73mV-ugBnjQawGsGiaBoIVy1wMmW-pSUyV8eFgDNph_FzWqCQLQhMmb0WeQ2P3EWSo10s_-n4QZjR5ANDSexDzBg-0EEmdxkU5LQ7EzD8lEcQB46CRSQg21SPxOuPAXlttFJ0JT&source=gbs_api",
            },
            {
                book: "The Foxglove King",
                thumbnail: "http://books.google.com/books/publisher/content?id=Om1zEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70hndKNahMWt4K87C3ObEevH_X72fTVtccH0Uoqm3dcKGOdRYoO-Si1s-sWfYOhXtcLbG6s1wCNDrjdT8c-Cg4fmU4mmfYkeQuib4uy-zyrp0u72SR2VTKLrBTrQqUAofMuCDSI&source=gbs_api",
            }
        ],

        Mystery: [
            {
                book: "The Orchard House",
                thumbnail: "http://books.google.com/books/publisher/content?id=CtTxDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE7177yF9_DcLZjZhPuI0oS1DsIIdO2N9NqwRIKxeUCsikNZrTbroOqNWVq14wWqKg5kYd7DQ1MM-Wq_pgJ1-KiK8k927XNeftXnXZVjtsfGAaiw2Q6fnPe8n3HPEDU9OL_Qe6n88&source=gbs_api",
            },
            {
                book: "The Red Book",
                thumbnail: "http://books.google.com/books/publisher/content?id=2S6ZAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71g6v5Oo11VU_xLRq_tESToFXMzSDiuTfSvsuCyv04ZZVL5YP2-shK8d__QIHQ78cBSEHTeQZ_y-XYCO9rPsxPWOIr7BjCEQGPEfdpH5ixx1UIi12E1yW4vfHxMlJSxK4MW2kLd&source=gbs_api",
            },
            {
                book: "The Hound of The Baskervilles",
                thumbnail: "http://books.google.com/books/publisher/content?id=G4GMEAAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73LNfD5EBiaG2cUEolltrMSjsjwd6cqYJt2D5LwHeS9HRtWCCOSIE6YhkZf3Qey5c3je2MjWXcnPW_LI7LYP50l4CDAFml4hbueUJA49Y4Taz3U6s2acnaLklBd1-a0j_QNxMhy&source=gbs_api",
            },
            {
                book: "Silent Murders",
                thumbnail: "http://books.google.com/books/publisher/content?id=Yhk_BAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE712W8HV8yPsci6Wov45iuQ8yWqNgnOTRT0hqUMSFufu4mePbtOOgnrqm023V8Qh2vSuFvQigmwlBnH1d7sAg3alm3PindWUMHTQA3Jc7xAK_PGXJbH3dOZI_X-YKxcHIMTiWxys&source=gbs_api",
            },
            {
                book: "A Sinister Revenge",
                thumbnail: "http://books.google.com/books/publisher/content?id=KNNzEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72LNtFEI0qnpWLGj-dSy9nZg7IQo-Ro2vnAzgElIT9gu5tkA-tmK4BoYupyAguA1B6lfuTgJ3yM5-hXwmX3MPDxRVjslUVQvEc59QWi8jknQAgPw_ni2WvpOp4val3MPCP51cpD&source=gbs_api",
            },
            {
                book: "Seven Faceless Saints",
                thumbnail: "http://books.google.com/books/publisher/content?id=pmxzEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73ynBiKQ9qmQoq69Py63-avjRrqNUF_Fs87IkuQoNAEXEoUkvijEhP7hMgwrul4FTNr_jgxQ8DWY7voTPO2Ho7zZcMJo3M1RhSoudb9exMyVKZcflYd7EDkmwWfeb4Y7YhYJxaa&source=gbs_api",
            },
            {
                book: "The Devil's Playground",
                thumbnail: "http://books.google.com/books/content?id=lRPI11h-LzIC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73WjGzVY_sAQwe_pLfPHegfKI8Hn2Zx6zYwwLas8MjSfz3t0QlInRQHCJfW2DAQyvemf7JnSkp6D1cUk-cbLBGy6H9eDHxskgZ3-r3PQQqPInlGZ-nu9UV5J68sLFEwoqiaOhaJ&source=gbs_api",
            },
            {
                book: "Greymist Fair",
                thumbnail: "http://books.google.com/books/publisher/content?id=d013EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70gPt2crK-R18XlHMscnx1ofvX30qC4Kr9HPJvo8Ee-X-0OXBU991COIc6G1ZWcfwdt1ZL9hNdA6qyNQ7Qhw276Hq0nero4PJLPwrsoUtvrJjVtTwghnaDgieoQOTaAH6uXj2Af&source=gbs_api",
            },
            {
                book: "One Extra Corpse",
                thumbnail: "http://books.google.com/books/publisher/content?id=HICKEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72IB2AvjVP4p51HFQDdpkx_sWFVLeIoSf8wIig2Z9f-Hx2PX2isGc2vv6L52KwvJTLIMZAwpd4iOZJHCvlINOZIOJdrv6y0BvfWmkk-2-aqWqJu0mSjYjS35ITJiOUw4GOUnW-8&source=gbs_api",
            },
            {
                book: "The Metropolitan Affair",
                thumbnail: "http://books.google.com/books/publisher/content?id=gcB8EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70SDnLbuA6lmqePERbl-4Pu2aEFkNuatsASjIIOqtRpVi0HJIMg6wR4-hiVOe6ducsKNaOPCab1SBPIss0b6O9HyCRYSRnZdzPAwpeSPwOFgkayQISLXL-W6Hx363YN_Dfkbxkd&source=gbs_api",
            }
        ],

        Manga: [
            {
                book: "Hunter x Hunter",
                thumbnail: "http://books.google.com/books/publisher/content?id=FJdHDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70xhzSSwLRyVF4bmBBoVPEeMCeiAYBf7H0bICWJsO7rNnXmXEwuhJ7nvCs-lTeFOiUmvepI7naB6_STdQ7kSOTejZIBSFaH0rAAV37Q6AhuZ9iCMUZFBleLZIftaV0Rc0a7DHYz&source=gbs_api",
            },
            {
                book: "BloodBorne #1",
                thumbnail: "http://books.google.com/books/publisher/content?id=3VRMDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71cxmWAzZLipKvG7Ga8VL7cOHvcE_s1jO3a2rzhWfdP-eQY3ux93g31D7xuX3TCdZs3BcIOFy_D5TLv6S9dgSG7C3Fpy6sExpD1twrUIaWnpMcUjgIDkufcFGlNHu9zB3TNrWw2&source=gbs_api",
            },
            {
                book: "Jujutsu Kaisen",
                thumbnail: "http://books.google.com/books/publisher/content?id=MZPLDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70lW-kXSA2GEUDpaIeg0pIAivIy0IVzET8xHO4agiMlb69WUerSgtFBA7AU6jIG6C0N1feeYy0Ony7ApJI3SCLujiPKIJYrq4eFIyV4vJMPOqaUaSvz0XSyPdg0Gjk9BadETARA&source=gbs_api",
            },
            {
                book: "My Hero Academia",
                thumbnail: "http://books.google.com/books/publisher/content?id=zfRHEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73Lfu55qcbwqwD4pHrc6PBQrY88GNrkhk1VUBgehAm5pW-kMuB23NEaWqWr3dPjnSFS48_tSO8MXj3DUD-HxsWkN21xUA4q2mLuVeLIO9j7g9mxGqRGiEMB_rWOi0-PDRBi13ID&source=gbs_api",
            },
            {
                book: "Demon Slayer",
                thumbnail: "http://books.google.com/books/publisher/content?id=lN3lDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE705gEg8c1NG36cpQ-MRJ8FIqqMF32bUDJKZG7_lEsD4Di3d1Emz7OJ44gm9i4Q9p31IelXYLkvViKXjRI8czK73VlAKYPXMkfv2MOkE4aaCcUQ_7HQ9vPVg5FHp3KrHtNL1s-Qv&source=gbs_api",
            },
            {
                book: "Chainsaw Man",
                thumbnail: "http://books.google.com/books/publisher/content?id=DlNJEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70XpabukrB2h-CB1qkG743CbPjag2Syljh6UA5R9VmQWbeDPUSNqrsPZZJ1Xu6S_OadaRxhDfUlzKqKdtf8juasZwj1YUTu_DQLFYLQ4BQ9IGH61cBFKA0CeslWH60Ckk7p4X69&source=gbs_api",
            },
            {
                book: "Attack On Titan",
                thumbnail: "http://books.google.com/books/publisher/content?id=aY-QEAAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71gTMsju5arOGuwQ46VnEjWBc_zaTC5jpzkd_kho9kcvAVzYst2VkNppCkAJUpR2pw4sdRlmKWNywViPTjPiQl4idNzEAQlYUqIz9RVuN0HAdI-Ly2pSGOYASYwsNgys_NDZDcr&source=gbs_api",
            },
            {
                book: "The Case Study Of Vanitas",
                thumbnail: "http://books.google.com/books/publisher/content?id=vtccDQAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE738cnmC5xz4gNag9kiHHFnsGSU3VpdxdFt2nake2oRC3CzF4VB1BzVCcGXEg0qKpFGNy7nsFXT1sFov9VgGc1f6zaOGYPy09lg6UTUbKyHvGIvaOVZ7RAmnW8xF42U8kzJaJuQy&source=gbs_api",
            },
            {
                book: "Trigun",
                thumbnail: "http://books.google.com/books/content?id=gKVCtcjegi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71IWDSCDcxlB1ELnrQYdlyYFq0RLTndQ72C4-f9lbUTf9FGhQJtA68t5i4kPYPGaSYKQKA-OUdcH_4Uuwo8mw67-SptA8eHyxuho9uJBeZxrbkeL5VOdQPDQ0GERfr3sFpHbBWn&source=gbs_api",
            },

        ]
    },

]

export default categories;

// categories.map((item,index) => {
//     console.log(item.Fiction.map((book,idx) => {
//         console.log(book.book)
//     }))
// })
