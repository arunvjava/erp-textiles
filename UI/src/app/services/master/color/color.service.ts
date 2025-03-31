import { Injectable } from '@angular/core';
import { ApiService } from '../../api.service';
import { HttpClient } from '@angular/common/http';
import { Color } from '../../../models/master/color.model';
import { Response } from '../../../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class ColorService extends ApiService {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  saveBrand(color: string) {
    return this.post<Response<string>>('/color', color);
  }

  updateBrand(color: Color) {
    return this.put<Response<string>>('/color', color);
  }

  getAllColors() {
    return this.get<Response<Color[]>>("/color/all");
  }

  deleteBrands(ids: string[]) {
    return this.delete(`/color/${ids}`);
  }

}
