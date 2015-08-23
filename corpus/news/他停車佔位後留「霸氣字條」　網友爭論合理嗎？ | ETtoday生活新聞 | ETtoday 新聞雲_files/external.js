/* in-freq, hit 1 */
/* silent, no pid */
  if (ONEAD_get_response !== undefined && typeof ONEAD_get_response == 'function'){
      ONEAD_get_response(null);
  }
  if (window.ONEAD_img !== undefined && typeof window.ONEAD_img == 'function'){
    window.ONEAD_img({
      "guid": "9f4a06cd-d05a-38e2-a653-60d0d0cafe95",
      "pid": "",
      "play_mode": ""
    });
  }