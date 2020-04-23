import { Injectable } from '@angular/core';
import { NewsComponent } from '../components/news/news.component';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor() { }

  getNews() {
    var json = `{
    "news" : [ { "news" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus neque quis eros sagittis, eu sodales dui lacinia. Vivamus non dui id urna tincidunt cursus non ac risus. Curabitur ac augue et ipsum rhoncus convallis. Vivamus non leo lectus. Nunc in enim a mauris rhoncus iaculis. Cras id lacus et eros imperdiet aliquam. Sed quis odio mauris. Nunc lectus enim, blandit at ante vel, ultricies dapibus mi. Maecenas sit amet est lobortis, ullamcorper lectus ut, tempus massa." } , { "news" : "Cras dapibus dui nisl, at euismod justo commodo eu. Sed dignissim nulla in cursus semper. Ut quis dui massa. Praesent volutpat dignissim nisi, id tristique lectus fringilla id. Suspendisse ornare a lorem eu suscipit. Phasellus pulvinar tristique ante, vitae iaculis nunc feugiat vitae. Phasellus egestas condimentum neque in faucibus. Vivamus euismod nisl sed enim tincidunt mattis. Aliquam quis elit ac eros finibus pretium. Suspendisse quis neque massa. Duis vel consequat lorem."} , { "news": " Suspendisse potenti. In urna lorem, lobortis nec volutpat sed, consequat quis ipsum. Vestibulum lobortis erat at orci tempus vulputate. Fusce vestibulum dignissim ex, at dapibus justo consequat nec. Phasellus vitae ipsum viverra, venenatis tellus pulvinar, porttitor est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam eget tellus sit amet ex sagittis molestie. Mauris in massa non quam maximus porttitor. Quisque convallis odio nulla, sed volutpat justo porttitor quis. Cras scelerisque mollis congue. Suspendisse volutpat turpis turpis. Donec sagittis ligula eget odio pulvinar consectetur."}]
  }`;

    const text = JSON.parse(json);
    
    const news = new Promise( (resolve, reject) => {
      setTimeout( () => {
        resolve(text);
      }, 2000)
    });

    return news;
  }
}
