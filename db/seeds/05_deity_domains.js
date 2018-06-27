exports.seed = function(knex, Promise) {
  return knex('deity_domains').del()
    .then(function () {
      return knex('deity_domains').insert([
        {id: 1, deity_id: 1, domain_id: 61},
        {id: 2, deity_id: 2, domain_id: 49},
        {id: 3, deity_id: 3, domain_id: 98},
        {id: 4, deity_id: 4, domain_id: 94},
        {id: 5, deity_id: 5, domain_id: 19},
        {id: 6, deity_id: 6, domain_id: 51},
        {id: 7, deity_id: 7, domain_id: 94},
        {id: 8, deity_id: 8, domain_id: 49},
        {id: 9, deity_id: 9, domain_id: 51},
        {id: 10, deity_id: 10, domain_id: 49},
        {id: 11, deity_id: 11, domain_id: 51},
        {id: 12, deity_id: 12, domain_id: 51},
        {id: 13, deity_id: 13, domain_id: 19},
        {id: 14, deity_id: 14, domain_id: 51},
        {id: 15, deity_id: 15, domain_id: 94},
        {id: 16, deity_id: 16, domain_id: 51},
        {id: 17, deity_id: 17, domain_id: 19},
        {id: 18, deity_id: 18, domain_id: 61},
        {id: 19, deity_id: 19, domain_id: 94},
        {id: 20, deity_id: 20, domain_id: 61},
        {id: 21, deity_id: 21, domain_id: 52},
        {id: 22, deity_id: 22, domain_id: 19},
        {id: 23, deity_id: 23, domain_id: 49},
        {id: 24, deity_id: 24, domain_id: 49},
        {id: 25, deity_id: 25, domain_id: 49},
        {id: 26, deity_id: 26, domain_id: 49},
        {id: 27, deity_id: 27, domain_id: 19},
        {id: 28, deity_id: 28, domain_id: 61},
        {id: 29, deity_id: 29, domain_id: 51},
        {id: 30, deity_id: 1, domain_id: 88},
        {id: 31, deity_id: 11, domain_id: 52},
        {id: 32, deity_id: 14, domain_id: 52},
        {id: 33, deity_id: 26, domain_id: 51},
        {id: 34, deity_id: 27, domain_id: 94},
        {id: 35, deity_id: 29, domain_id: 52},
        {id: 36, deity_id: 30, domain_id: 19},
        {id: 37, deity_id: 31, domain_id: 88},
        {id: 38, deity_id: 32, domain_id: 98},
        {id: 39, deity_id: 33, domain_id: 98},
        {id: 40, deity_id: 34, domain_id: 94},
        {id: 41, deity_id: 35, domain_id: 98},
        {id: 42, deity_id: 36, domain_id: 88},
        {id: 43, deity_id: 37, domain_id: 49},
        {id: 44, deity_id: 37, domain_id: 94},
        {id: 45, deity_id: 38, domain_id: 61},
        {id: 46, deity_id: 38, domain_id: 94},
        {id: 47, deity_id: 39, domain_id: 19},
        {id: 48, deity_id: 39, domain_id: 51},
        {id: 49, deity_id: 40, domain_id: 52},
        {id: 50, deity_id: 41, domain_id: 51},
        {id: 51, deity_id: 42, domain_id: 51},
        {id: 52, deity_id: 43, domain_id: 61},
        {id: 53, deity_id: 44, domain_id: 49},
        {id: 54, deity_id: 44, domain_id: 51},
        {id: 55, deity_id: 45, domain_id: 49},
        {id: 56, deity_id: 45, domain_id: 51},
        {id: 57, deity_id: 46, domain_id: 61},
        {id: 58, deity_id: 46, domain_id: 88},
        {id: 59, deity_id: 47, domain_id: 49},
        {id: 60, deity_id: 48, domain_id: 98},
        {id: 61, deity_id: 49, domain_id: 98},
        {id: 62, deity_id: 50, domain_id: 49},
        {id: 63, deity_id: 51, domain_id: 61},
        {id: 64, deity_id: 52, domain_id: 88},
        {id: 65, deity_id: 53, domain_id: 52},
        {id: 66, deity_id: 54, domain_id: 49},
        {id: 67, deity_id: 54, domain_id: 51},
        {id: 68, deity_id: 54, domain_id: 52},
        {id: 69, deity_id: 55, domain_id: 98},
        {id: 70, deity_id: 56, domain_id: 51},
        {id: 71, deity_id: 56, domain_id: 61},
        {id: 72, deity_id: 57, domain_id: 49},
        {id: 73, deity_id: 57, domain_id: 98},
        {id: 74, deity_id: 58, domain_id: 51},
        {id: 75, deity_id: 59, domain_id: 51},
        {id: 76, deity_id: 60, domain_id: 19},
        {id: 77, deity_id: 61, domain_id: 49},
        {id: 78, deity_id: 61, domain_id: 94},
        {id: 79, deity_id: 62, domain_id: 49},
        {id: 80, deity_id: 63, domain_id: 94},
        {id: 81, deity_id: 64, domain_id: 88},
        {id: 82, deity_id: 64, domain_id: 98},
        {id: 83, deity_id: 65, domain_id: 94},
        {id: 84, deity_id: 66, domain_id: 51},
        {id: 85, deity_id: 67, domain_id: 98},
        {id: 86, deity_id: 68, domain_id: 61},
        {id: 87, deity_id: 69, domain_id: 88},
        {id: 88, deity_id: 70, domain_id: 94},
        {id: 89, deity_id: 71, domain_id: 51},
        {id: 90, deity_id: 71, domain_id: 52},
        {id: 91, deity_id: 72, domain_id: 19},
        {id: 92, deity_id: 73, domain_id: 94},
        {id: 93, deity_id: 74, domain_id: 98},
        {id: 94, deity_id: 75, domain_id: 94},
        {id: 95, deity_id: 76, domain_id: 51},
        {id: 96, deity_id: 76, domain_id: 52},
        {id: 97, deity_id: 77, domain_id: 49},
        {id: 98, deity_id: 78, domain_id: 45},
        {id: 99, deity_id: 78, domain_id: 51},
        {id: 100, deity_id: 79, domain_id: 19},
        {id: 101, deity_id: 80, domain_id: 51},
        {id: 102, deity_id: 80, domain_id: 61},
        {id: 103, deity_id: 81, domain_id: 49},
        {id: 104, deity_id: 82, domain_id: 19},
        {id: 105, deity_id: 82, domain_id: 88},
        {id: 106, deity_id: 82, domain_id: 94},
        {id: 107, deity_id: 83, domain_id: 61},
        {id: 108, deity_id: 83, domain_id: 88},
        {id: 109, deity_id: 84, domain_id: 49},
        {id: 110, deity_id: 85, domain_id: 49},
        {id: 111, deity_id: 85, domain_id: 98},
        {id: 112, deity_id: 86, domain_id: 88},
        {id: 113, deity_id: 87, domain_id: 51},
        {id: 114, deity_id: 87, domain_id: 52},
        {id: 115, deity_id: 88, domain_id: 52},
        {id: 116, deity_id: 89, domain_id: 51},
        {id: 117, deity_id: 89, domain_id: 52},
        {id: 118, deity_id: 90, domain_id: 51},
        {id: 119, deity_id: 91, domain_id: 51},
        {id: 120, deity_id: 91, domain_id: 52},
        {id: 121, deity_id: 92, domain_id: 52},
        {id: 122, deity_id: 92, domain_id: 98},
        {id: 123, deity_id: 93, domain_id: 19},
        {id: 124, deity_id: 94, domain_id: 94},
        {id: 125, deity_id: 95, domain_id: 94},
        {id: 126, deity_id: 96, domain_id: 61},
        {id: 127, deity_id: 96, domain_id: 88},
        {id: 128, deity_id: 97, domain_id: 52},
        {id: 129, deity_id: 98, domain_id: 98},
        {id: 130, deity_id: 99, domain_id: 61},
        {id: 131, deity_id: 100, domain_id: 98},
        {id: 132, deity_id: 101, domain_id: 88},
        {id: 133, deity_id: 101, domain_id: 98},
        {id: 134, deity_id: 102, domain_id: 98},
        {id: 135, deity_id: 103, domain_id: 49},
        {id: 136, deity_id: 103, domain_id: 98},
        {id: 137, deity_id: 104, domain_id: 61},
        {id: 138, deity_id: 105, domain_id: 104},
        {id: 139, deity_id: 105, domain_id: 56},
        {id: 140, deity_id: 105, domain_id: 49},
        {id: 141, deity_id: 105, domain_id: 105},
        {id: 142, deity_id: 106, domain_id: 2},
        {id: 143, deity_id: 106, domain_id: 61},
        {id: 144, deity_id: 106, domain_id: 107},
        {id: 145, deity_id: 106, domain_id: 108},
        {id: 146, deity_id: 107, domain_id: 92},
        {id: 147, deity_id: 107, domain_id: 93},
        {id: 148, deity_id: 108, domain_id: 67},
        {id: 149, deity_id: 108, domain_id: 93},
        {id: 150, deity_id: 108, domain_id: 99},
        {id: 151, deity_id: 108, domain_id: 109},
        {id: 152, deity_id: 109, domain_id: 110},
        {id: 153, deity_id: 109, domain_id: 48},
        {id: 154, deity_id: 109, domain_id: 111},
        {id: 155, deity_id: 109, domain_id: 112},
        {id: 156, deity_id: 109, domain_id: 113},
        {id: 157, deity_id: 110, domain_id: 117},
        {id: 158, deity_id: 110, domain_id: 118},
        {id: 159, deity_id: 110, domain_id: 98},
        {id: 160, deity_id: 111, domain_id: 115},
        {id: 161, deity_id: 111, domain_id: 114},
        {id: 162, deity_id: 111, domain_id: 65},
        {id: 163, deity_id: 111, domain_id: 116},
        {id: 164, deity_id: 112, domain_id: 10},
        {id: 165, deity_id: 112, domain_id: 38},
        {id: 166, deity_id: 112, domain_id: 54},
        {id: 167, deity_id: 112, domain_id: 84},
        {id: 168, deity_id: 113, domain_id: 18},
        {id: 169, deity_id: 113, domain_id: 19},
        {id: 170, deity_id: 113, domain_id: 29},
        {id: 171, deity_id: 113, domain_id: 94},
        {id: 172, deity_id: 114, domain_id: 10},
        {id: 173, deity_id: 114, domain_id: 54},
        {id: 174, deity_id: 114, domain_id: 94},
        {id: 175, deity_id: 115, domain_id: 1},
        {id: 176, deity_id: 115, domain_id: 2},
        {id: 177, deity_id: 115, domain_id: 26},
        {id: 178, deity_id: 115, domain_id: 33},
        {id: 179, deity_id: 115, domain_id: 67},
        {id: 180, deity_id: 115, domain_id: 98},
        {id: 181, deity_id: 116, domain_id: 10},
        {id: 182, deity_id: 116, domain_id: 54},
        {id: 183, deity_id: 116, domain_id: 94},
        {id: 184, deity_id: 117, domain_id: 2},
        {id: 185, deity_id: 117, domain_id: 10},
        {id: 186, deity_id: 117, domain_id: 93},
        {id: 187, deity_id: 117, domain_id: 99},
        {id: 188, deity_id: 117, domain_id: 77},
        {id: 189, deity_id: 118, domain_id: 21},
        {id: 190, deity_id: 118, domain_id: 50},
        {id: 191, deity_id: 118, domain_id: 71},
        {id: 192, deity_id: 118, domain_id: 84},
        {id: 193, deity_id: 119, domain_id: 19},
        {id: 194, deity_id: 119, domain_id: 50},
        {id: 195, deity_id: 119, domain_id: 56},
        {id: 196, deity_id: 120, domain_id: 10},
        {id: 197, deity_id: 120, domain_id: 29},
        {id: 198, deity_id: 120, domain_id: 94},
        {id: 199, deity_id: 120, domain_id: 98},
        {id: 200, deity_id: 120, domain_id: 21},
        {id: 201, deity_id: 121, domain_id: 38},
        {id: 202, deity_id: 121, domain_id: 50},
        {id: 203, deity_id: 121, domain_id: 71},
        {id: 204, deity_id: 122, domain_id: 119},
        
        {id: 205, deity_id: 123, domain_id: 38},
        {id: 206, deity_id: 123, domain_id: 51},
        {id: 207, deity_id: 123, domain_id: 67},
        {id: 208, deity_id: 123, domain_id: 109},
        {id: 209, deity_id: 123, domain_id: 17},
        {id: 210, deity_id: 124, domain_id: 49},
        {id: 211, deity_id: 124, domain_id: 50},
        {id: 212, deity_id: 124, domain_id: 56},
        {id: 213, deity_id: 125, domain_id: 1},
        {id: 214, deity_id: 125, domain_id: 2},
        {id: 215, deity_id: 125, domain_id: 26},
        {id: 216, deity_id: 126, domain_id: 14},
        {id: 217, deity_id: 126, domain_id: 38},
        {id: 218, deity_id: 126, domain_id: 50},
        {id: 219, deity_id: 126, domain_id: 71},
        {id: 220, deity_id: 127, domain_id: 38},
        {id: 221, deity_id: 127, domain_id: 50},
        {id: 222, deity_id: 127, domain_id: 87},
        {id: 223, deity_id: 127, domain_id: 98},
        {id: 224, deity_id: 128, domain_id: 10},
        {id: 225, deity_id: 128, domain_id: 38},
        {id: 226, deity_id: 128, domain_id: 84},
        {id: 227, deity_id: 128, domain_id: 98},
        {id: 228, deity_id: 129, domain_id: 11},
        {id: 229, deity_id: 129, domain_id: 92},
        {id: 230, deity_id: 129, domain_id: 93},
        {id: 231, deity_id: 130, domain_id: 38},
        {id: 232, deity_id: 130, domain_id: 43},
        {id: 233, deity_id: 130, domain_id: 54},
        {id: 234, deity_id: 131, domain_id: 17},
        {id: 235, deity_id: 131, domain_id: 33},
        {id: 236, deity_id: 131, domain_id: 38},
        {id: 237, deity_id: 131, domain_id: 58},

        {id: 238, deity_id: 132, domain_id: 120},
        {id: 239, deity_id: 133, domain_id: 21},
        {id: 240, deity_id: 133, domain_id: 29},
        {id: 241, deity_id: 133, domain_id: 99},
        {id: 242, deity_id: 133, domain_id: 109},
        {id: 243, deity_id: 134, domain_id: 29},
        {id: 244, deity_id: 134, domain_id: 55},
        {id: 245, deity_id: 134, domain_id: 121},
        {id: 246, deity_id: 135, domain_id: 19},
        {id: 247, deity_id: 135, domain_id: 29},
        {id: 248, deity_id: 135, domain_id: 40},
        {id: 249, deity_id: 136, domain_id: 21},
        {id: 250, deity_id: 136, domain_id: 29},
        {id: 251, deity_id: 136, domain_id: 94},
        {id: 252, deity_id: 136, domain_id: 98},
        {id: 253, deity_id: 137, domain_id: 10},
        {id: 254, deity_id: 137, domain_id: 18},
        {id: 255, deity_id: 137, domain_id: 29},
        {id: 256, deity_id: 137, domain_id: 56},
        {id: 257, deity_id: 137, domain_id: 59},
        {id: 258, deity_id: 137, domain_id: 122},

        {id: 259, deity_id: , domain_id: },
        {id: 260, deity_id: , domain_id: },
        {id: 261, deity_id: , domain_id: },
        {id: 262, deity_id: , domain_id: },
        {id: 263, deity_id: , domain_id: },
        {id: 264, deity_id: , domain_id: },
        {id: 265, deity_id: , domain_id: },
        {id: 266, deity_id: , domain_id: },
        {id: 267, deity_id: , domain_id: },
        {id: 268, deity_id: , domain_id: },
        {id: 269, deity_id: , domain_id: },
        {id: 270, deity_id: , domain_id: },
      ])
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('deity_domains_id_seq', (SELECT MAX(id) FROM deity_domains));`
      )
    })
}
