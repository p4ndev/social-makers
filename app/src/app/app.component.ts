import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-notification />
    <main class="container mx-auto">
      <div class="grid grid-cols grid-cols-12">
        <div class="col-span-12 lg:col-span-3" style="background-color:rgba(255,255,255,0.3);">
          <div class="grid grid-cols-4 lg:grid-cols-none">
            <div class="col-span-1">
              <app-logo></app-logo>
            </div>
            <div class="col-span-2">
              <app-public-menu></app-public-menu>
              <app-admin-menu></app-admin-menu>
            </div>
          </div>
        </div>
        <div class="col-span-12 lg:col-span-9 p-5 bg-white">
          
          <h1>Ipisicing elit. Laboriosam aliquam vel</h1>

          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt at consequatur nam explicabo totam expedita laudantium tempore, facere accusamus non corporis ullam, culpa obcaecati ipsa officiis blanditiis possimus. Autem ullam odit facilis inventore porro reiciendis exercitationem dolorum nihil hic ex, reprehenderit corrupti! In sed at distinctio quo dolor quibusdam fugiat suscipit? Quod voluptatibus nam doloribus maiores vitadem eligendi dicta tempora beatae quasi?</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aliquam velit iusto, sunt, quidem repellat quo iste neque perspiciatis totam, recusandae ab quaerat vel provident quas ex asperiores. Enim, excepturi?</p>

          <p>ecessitatibus blanditiis amet ducimus dicta obcaecati deserunt nam molestiae iusto quod, tenetur accusamus, sint architecto magnam id quia excepturi. Sunt fugiat sequi a voluptatem, aehenderit fugiat, alias voluptatum? Suscipit facere aspernatur libero perferendis corrupti ex corporis a dolor autem soluta incidunt animi labore dignissimos, deserunt earum veritatis nostrum vero nulla eos quae harum? Aperiam beatae, esse quasi animi, porro iusto ducimus repudiandae nobis impedit modi mollitia debitis sit voluptas eius illo magni officia ipsam architecto maiores ab dolor dolorem harum consequuntur explicabo. Aliquam quidem iure, repellendus inventore tenetur rem atque voluptas dignissimos qui explicabo ab porro ut eligen</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aliquam velit iusto, sunt, quidem repellat quo iste neque perspiciatis totam, recusandae ab quaerat vel provident quas ex asperiores. Enim, excepturi?</p>

          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia nesciunt repellat quibusdam, odit, provident quis voluptas, vel commodi adipisci officiis accusantium repudiandae illum quasi modi consequuntur animi impedit itaque consequatur tempora minus porro veniam eveniet aliquid. Eius sit corporis quam libero veritatis nostrum natus ab rem minima, optio eum quae laudantium illo consequatur? Corrupti perspiciatis magni suscipit. Dignissimos officiis sunt quod ipsa eius ducimus delectus laboriovelit voluptates ex amet rem non expedita id ipsum nihil omnis possimus, saepe, natus harum earum magni nam! Molestias nemo magni dolorum facilis, reiciendis incidunt ab. Ex libero deleniti cupiditate alias possimus, magnam aspernatur minus consequatur debitis vero, voluptate rem sit! Quam dolorum cupiditate vel iure?</p>

          <p>liquid facilis voluptatibus illo dicta ducimus voluptate vero, labore, sint veritatis doloremque ut! Dolore rerum nihil consequuntur, iure labore obcaecati porro ratione quis magni tempore dignissimos illum quaerat odit assumenda. Sit debitis cum eius aut vitae repudiandae doloremque expedita corrupti, odit distinctio id tenetur commodi dicta ea! Voluptates illo, rerum voluptatem esse eius laborum saepe ipsum blanditiis distinctio provident debitis architecto totam eaque libero unde praesentium assumenda, quam repr</p>

          <p>at distinctio tempora tenetur sint quaerat vitae ipsa aliquid commodi ipsum deleniti, cupiditate, voluptatum velit. Aut suscipit consequuntur fugiat cupiditate voluptas laborum laudantium veniam eveniet quae dicta, voluptatem modi. Quia mque inventore? Consequuntur voluptate dignissimos earum qui illum, dolorem recusandae beatae dolorum ipsa </p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aliquam velit iusto, sunt, quidem repellat quo iste neque perspiciatis totam, recusandae ab quaerat vel provident quas ex asperiores. Enim, excepturi?</p>

          <p>soluta pariatur eos neque magnam voluptas tempora incidunt quaerat aut ipsum, cumque amet totam itaque, corporis omnis odio error ullam facere assumenda asperiores quam nihil quod dolor! Optio quisquam fugiat sint corporis illo adipisci nobis. Soluta laudantium ndi cumque ea modi odit voluptate omnis. Delectus quaerat saepe hic ipsum aliquam cupiditate aspernatur omnis adipisci obcaecati deleniti, veritatis laboriosam perspiciatis dolore nesciunt modi animi nisi, itaque ratione labore cu</p>

          <p>e sunt ea corporis! Itaque placeat facilis cumque officiis laudantium earum blanditiis, eveniet, mollitia rerum similique ab totam dolores perferendis eligendi dicta dolor! Ut repellanimi voluptatem temporibus molestiae obcaecati sint accusamus odit id asperiores officiis quisquam perspiciatis nemo quia! Dolore vel atque cupiditate architecto optio culpa fugit obcaecati adipisci molestiae doloremque itaque odio consectetur, assumenda earum non! Architecto dolor rem adipisci aliquid dolorum qui</p>

          <p>sam corrupti labore ratione, ad odit rem, iure qui odio totam perspiciatis minus laborum eum blanditiis reiciendis maiores dolorem pariatur inventore? Et, facilis? Nulla dolore quam ullam minima porro pariatur aperiam qui nesciunt accusantium numquam provident possimus dignissimos, aut impedit. Accusantium dolores totam eius reiciendis explicabo nisi, qui ab aut ex cupiditate. Itaque ea eos nihil eaque placeat ducimus illo! Et voluptatem magni magnam, quos corrupti aliquid! Ipsam veniam aliquam hic sit! Ratione tenetur consequatur adipisci fugiat perferendis itaque quas assumenda atque! Tempore suscipit voluptas molestiae error dolores? Necessitatibus </p>

          <router-outlet></router-outlet>

        </div>
      </div>
    </main>
  `
})
export class AppComponent{ }