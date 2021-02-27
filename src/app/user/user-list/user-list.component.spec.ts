import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { UserListComponent } from './user-list.component';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //H1 tag ı var mı ve bu tag içerisinde istediği text var mı
  //npm run test -- --include src/app/user/user-list/user-list.component.spec.ts
  //İle spesifik spec dosyasını çalıştırabiliyoruz
  it('h1 tag i olmalı', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h1").textContent).toContain("Kullanıcı Listesi");
  });


  it('user dizisi boş ise h3 gözüksün', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h3").textContent).toContain("Kullanıcı Listesi Boş");
  });

  it('user list item artmalıdır', () => {
    //Class yardımıyla buttonu buluyoruz
    const button = fixture.debugElement.query(By.css(".btn"));

    //Buttona tıklanmasını sağlıyoruz
    button.triggerEventHandler("click", null);

    //Componentin algılamasını bekliyorum
    fixture.detectChanges();

    //user listesine "li" ulaşıyoruz
    const listItem = fixture.debugElement.queryAll(By.css(".user-list-item"));

    //buttona tıklandıktan sonra 1 e eşit olması gerekiyor
    expect(listItem.length).toEqual(1);
  });

  it('tıklanıldığı kadar user list artmalıdır', () => {
    //Class yardımıyla buttonu buluyoruz
    const button = fixture.debugElement.query(By.css(".btn"));

    //Buttona kaç kere tıklanılması gerektğini belirtiyoruz
    for (let i = 0; i < 3; i++) {
      //Buttona tıklanmasını sağlıyoruz
      button.triggerEventHandler("click", null);
    }

    //Componentin algılamasını bekliyorum
    fixture.detectChanges();

    //user listesine "li" ulaşıyoruz
    const listItem = fixture.debugElement.queryAll(By.css(".user-list-item"));

    //buttona tıklandıktan sonra 3 e eşit olması gerekiyor
    expect(listItem.length).toEqual(3);
  });
});
