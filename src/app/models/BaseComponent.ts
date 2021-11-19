export class BaseComponent {

    ADMIN: boolean; CLIENTE: boolean; TECNICO: boolean;

    replace(perfis: any[]): any[] {
      
      perfis.splice(perfis.indexOf('ADMIN'), 1, 0);
      perfis.splice(perfis.indexOf('CLIENTE'), 1, 1);
      perfis.splice(perfis.indexOf('TECNICO'), 1, 2);

      return perfis;
    }
  
    setPerfilChecked(perfis: any[]) {
      this.ADMIN = perfis.includes(0);
      this.CLIENTE = perfis.includes(1);
      this.TECNICO = perfis.includes(2);
    }
}
