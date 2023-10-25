export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  original_name: string;
  name: string;
}
export interface Element {
  type: "Trailer" | "Teaser" | "Clip" | "Featurette";
}

export interface Products {
  default_price: {
    id: string;
    unit_amount: number;
  };
  id: string;
  images: [];
  metadata: {
    adv: string;
  };
  name: string;
}


export interface Subscription{
  current_period_start: number;
  id: string;
  current_period_end: number
  plan:{
    nickname:string;
    amount: number;
    active: boolean;
  }
  default_payment_method:{
    card:{
      brand?: string
      exp_month?: number;
      exp_year?: number;
      funding?: string;
      last4?:string
    }
  }
  customer: {
		email: string;
		metadata: {
			user_id: string;
		};
    invoice_settings:{
      default_payment_method:{
        card:{
          brand?: string
          exp_month?: number;
          exp_year?: number;
          funding?: string;
          last4?:string
        }
      }
    }
}
}