/* FARHETNA Memories — one place for prices and default limits.
   Limits here are only what the page shows; the real limits live in the database
   (memories_albums) and the storage bucket, and the admin page can raise them. */
window.FM = {
  price: 399,          // standalone album, EGP
  magPrice: 299,       // My Magazine (The Surprise), EGP
  addon: 249,          // with an invitation order, EGP
  sbUrl: "https://fjoyqftndulavcjcxaya.supabase.co",
  sbKey: "sb_publishable_RaxsucJi-Mlswbr0ZCQSKw_GAq79mui",
  bucket: "memories",
  site: "https://farhetnainvite.com",
  maxVideoMB: 50,      // Supabase free plan: 50MB per file
  maxPhotoMB: 25,      // before shrinking on the phone
  maxFilesPerPick: 30
};
/* outside Egypt: abroad prices (charged in EGP) — see /geo.js */
if (window.FG && window.FG.abroad) {
  window.FM.price = window.FG.price("album");
  window.FM.addon = window.FG.price("albumAddon");
  window.FM.magPrice = window.FG.price("magazine");
}
