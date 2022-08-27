/**
 * Bootstrap Table Indonesian translation
 * Author: Andre Gardiner<andre@sirdre.com>
 */

$.fn.bootstrapTable.locales['id-ID'] = $.fn.bootstrapTable.locales['id'] = {
  formatCopyRows () {
    return 'Salin Baris'
  },
  formatPrint () {
    return 'Cetak'
  },
  formatLoadingMessage () {
    return 'Memuat, mohon tunggu'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} baris per halaman`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Menampilkan ${pageFrom} sampai ${pageTo} dari ${totalRows} baris (filtered from ${totalNotFiltered} total rows)`
    }

    return `Menampilkan ${pageFrom} sampai ${pageTo} dari ${totalRows} baris`
  },
  formatSRPaginationPreText () {
    return 'halaman sebelumnya'
  },
  formatSRPaginationPageText (page) {
    return `ke halaman ${page}`
  },
  formatSRPaginationNextText () {
    return 'halaman berikutnya'
  },
  formatDetailPagination (totalRows) {
    return `Menampilkan ${totalRows} baris`
  },
  formatClearSearch () {
    return 'Bersihkan filter'
  },
  formatSearch () {
    return 'Pencarian'
  },
  formatNoMatches () {
    return 'Tidak ditemukan data yang cocok'
  },
  formatPaginationSwitch () {
    return 'Sembunyikan/Tampilkan halaman'
  },
  formatPaginationSwitchDown () {
    return 'Tampilkan pagination'
  },
  formatPaginationSwitchUp () {
    return 'Sembunyikan pagination'
  },
  formatRefresh () {
    return 'Muat ulang'
  },
  formatToggleOn () {
    return 'Show card view'
  },
  formatToggleOff () {
    return 'Hide card view'
  },
  formatColumns () {
    return 'kolom'
  },
  formatColumnsToggleAll () {
    return 'Toggle all'
  },
  formatFullscreen () {
    return 'Satu layar penuh'
  },
  formatAllRows () {
    return 'Semua'
  },
  formatAutoRefresh () {
    return 'Refresh Otomatis'
  },
  formatExport () {
    return 'Ekspor data'
  },
  formatJumpTo () {
    return 'GO'
  },
  formatAdvancedSearch () {
    return 'Advanced search'
  },
  formatAdvancedCloseButton () {
    return 'Tutup'
  },
  formatFilterControlSwitch () {
    return 'Hide/Show controls'
  },
  formatFilterControlSwitchHide () {
    return 'Hide controls'
  },
  formatFilterControlSwitchShow () {
    return 'Show controls'
  }
}

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['id-ID'])
