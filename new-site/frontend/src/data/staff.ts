/**
 * Staff member data for the Brewtendo Network website
 * Each staff member has a name, associated Mii image, and role
 */

export interface StaffMember {
  name: string;
  image: string;
  role: string;
}

export const staffMembers: StaffMember[] = [
  { name: 'Adrian (VugbKat)', image: '/images/miis/Adrian_render_headshot_2026-03-24T22_43_30.373Z.png', role: 'Guide Writer' },
  { name: 'cannedfart', image: '/images/miis/cannedfart_render_headshot_2026-03-24T21_49_38.735Z.png', role: 'Web Developer' },
  { name: 'gilberr', image: '/images/miis/gilberr_render_headshot_2026-03-24T22_05_44.161Z.png', role: 'Staff' },
  { name: 'Khentendo', image: '/images/miis/Khentendo_render_headshot_2026-03-25T00_10_32.332Z.png', role: 'Staff' },
  { name: 'KittenPeng', image: '/images/miis/KittenPeng_render_headshot_2026-03-25T00_42_11.129Z.png', role: 'Staff' },
  { name: 'Sam', image: '/images/miis/Sam_render_headshot_2026-03-24T21_54_02.653Z.png', role: 'Staff' },
  { name: 'SatellaGuy', image: '/images/miis/SatellaGuy_render_headshot_2026-03-24T22_50_14.552Z.png', role: 'Staff' },
  { name: 'Thom', image: '/images/miis/Thom_render_headshot_2026-03-24T22_48_45.453Z.png', role: 'Staff' },
  { name: 'Andrea', image: '/images/miis/Connor_render_headshot_2026-03-25T00_39_23.338Z.png', role: 'Founder' },
  { name: 'Bunnyzluver1998', image: '/images/miis/Nick_render_headshot_2026-03-24T22_51_29.490Z.png', role: 'Proxy Owner' },
  { name: 'FunDog', image: '/images/miis/DoggoITA_render_headshot_2026-03-24T22_54_44.382Z.png', role: 'Staff' },
  { name: 'HEXADUCK', image: '/images/miis/Gavyn_render_headshot_2026-03-25T00_51_38.019Z.png', role: 'Staff' },
  { name: 'John N. Brewtendo', image: '/images/miis/Impeeza_render_headshot_2026-03-25T00_03_37.448Z.png', role: 'Staff' },
  { name: 'Meng', image: '/images/miis/Selim_render_headshot_2026-03-24T22_49_20.876Z.png', role: 'Staff' },
  { name: 'Mr.Ghosty', image: '/images/miis/Ś_render_headshot_2026-03-25T00_05_25.069Z.png', role: 'Staff' },
  { name: 'Preblox', image: '/images/miis/User_render_headshot_2026-03-24T22_04_34.570Z.png', role: 'Staff' },
  { name: 'Drag0n_A13', image: '/images/miis/Zach_render_headshot_2026-03-24T21_57_35.946Z.png', role: 'Staff' },
  { name: 'Somarix', image: '/images/miis/Zay_render_headshot_2026-03-24T22_52_59.073Z.png', role: 'Staff' },
  { name: 'Technet', image: '/images/miis/awoken_kin_render_headshot_2026-03-24T22_02_52.997Z.png', role: 'Staff' },
  { name: 'cool guy', image: '/images/miis/gingka_render_headshot_2026-03-25T00_26_02.830Z.png', role: 'Staff' },
];

// Backward compatibility: simple list of staff names
export const staffList: string[] = staffMembers.map(s => s.name);

/**
 * Escapes HTML characters to prevent XSS attacks
 * @param unsafe - Unsafe string that may contain HTML characters
 * @returns Sanitized string with HTML characters escaped
 */
export function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
