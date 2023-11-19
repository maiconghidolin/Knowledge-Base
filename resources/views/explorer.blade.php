@foreach($articles as $article)
<li class="faq-item">
    <div class="faq-title-wrapper">
        <div class="faq-title-area">
            <div class="title-wrapper">
                <span class="faq-title">{{ $article->title }}</span>
            </div>
        </div>
        <div class="faq-item-action">

            @foreach($article->tags as $tag)
            <div class="badge-wrapper me-1">
                <span class="badge rounded-pill badge-light-primary">{{$tag->name}}</span>
            </div>
            @endforeach

            <small class="text-nowrap text-muted me-1">{{$article->created_at->format('d/m/Y')}}</small>
        </div>
    </div>
</li>
@endforeach