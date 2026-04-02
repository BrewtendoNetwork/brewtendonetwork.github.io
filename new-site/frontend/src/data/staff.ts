export interface StaffMember {
  name: string;
  image: string;
}

export const staffMembers: StaffMember[] = [
  { name: 'Adrian (VugbKat)', image: '/images/miis/Adrian_render_headshot_2026-03-24T22_43_30.373Z.png' },
  { name: 'cannedfart', image: '/images/miis/cannedfart_render_headshot_2026-03-24T21_49_38.735Z.png' },
  { name: 'gilberr', image: '/images/miis/gilberr_render_headshot_2026-03-24T22_05_44.161Z.png' },
  { name: 'Khentendo', image: '/images/miis/Khentendo_render_headshot_2026-03-25T00_10_32.332Z.png' },
  { name: 'KittenPeng', image: '/images/miis/KittenPeng_render_headshot_2026-03-25T00_42_11.129Z.png' },
  { name: 'Sam', image: '/images/miis/Sam_render_headshot_2026-03-24T21_54_02.653Z.png' },
  { name: 'SatellaGuy', image: '/images/miis/SatellaGuy_render_headshot_2026-03-24T22_50_14.552Z.png' },
  { name: 'Thom', image: '/images/miis/Thom_render_headshot_2026-03-24T22_48_45.453Z.png' },
  { name: 'Andrea', image: '/images/miis/Connor_render_headshot_2026-03-25T00_39_23.338Z.png' },
  { name: 'Bunnyzluver1998', image: '/images/miis/Nick_render_headshot_2026-03-24T22_51_29.490Z.png' },
  { name: 'FunDog', image: '/images/miis/DoggoITA_render_headshot_2026-03-24T22_54_44.382Z.png' },
  { name: 'HEXADUCK', image: '/images/miis/Gavyn_render_headshot_2026-03-25T00_51_38.019Z.png' },
  { name: 'John N. Brewtendo', image: '/images/miis/Impeeza_render_headshot_2026-03-25T00_03_37.448Z.png' },
  { name: 'Meng', image: '/images/miis/Selim_render_headshot_2026-03-24T22_49_20.876Z.png' },
  { name: 'Mr.Ghosty', image: '/images/miis/Ś_render_headshot_2026-03-25T00_05_25.069Z.png' },
  { name: 'Preblox', image: '/images/miis/User_render_headshot_2026-03-24T22_04_34.570Z.png' },
  { name: 'Drag0n_A13', image: '/images/miis/Zach_render_headshot_2026-03-24T21_57_35.946Z.png' },
  { name: 'Somarix', image: '/images/miis/Zay_render_headshot_2026-03-24T22_52_59.073Z.png' },
  { name: 'Technet', image: '/images/miis/awoken_kin_render_headshot_2026-03-24T22_02_52.997Z.png' },
  { name: 'cool guy', image: '/images/miis/gingka_render_headshot_2026-03-25T00_26_02.830Z.png' },
  { name: 'nebulagamez', image: '/images/miis/Adrian_render_headshot_2026-03-24T22_43_30.373Z.png' },
  { name: 'very broken ps3', image: '/images/miis/cannedfart_render_headshot_2026-03-24T21_49_38.735Z.png' },
  { name: 'vista', image: '/images/miis/gilberr_render_headshot_2026-03-24T22_05_44.161Z.png' },
  { name: 'ENO yosh :3', image: '/images/miis/Khentendo_render_headshot_2026-03-25T00_10_32.332Z.png' },
  { name: 'synikers', image: '/images/miis/KittenPeng_render_headshot_2026-03-25T00_42_11.129Z.png' },
  { name: 'sam.', image: '/images/miis/Sam_render_headshot_2026-03-24T21_54_02.653Z.png' },
  { name: 'Ragy', image: '/images/miis/SatellaGuy_render_headshot_2026-03-24T22_50_14.552Z.png' },
];

// Old simple list for backward compatibility
export const staffList: string[] = staffMembers.map(s => s.name);

export function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
