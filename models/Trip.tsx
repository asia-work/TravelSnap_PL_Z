export interface Trip {
  id: number
  title: string;
  destination: string;
  date: string;
  rating: number;
  onUsun?: () => void;
}
