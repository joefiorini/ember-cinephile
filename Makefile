API_KEY = $(shell cat .api-key)
TMDB_BASE = http://api.themoviedb.org/3

data/movie-page%.json:
	curl "$(TMDB_BASE)/movie/upcoming?api_key=$(API_KEY)&page=$*" > $@
	for id in $$(jshon -e results -a -e id < $@) ; do \
		make data/movie/$$id.json ; \
	done

data/movie/%.json:
	mkdir -p data/movie
	curl "$(TMDB_BASE)/movie/$*?api_key=$(API_KEY)" > $@

data: data/movie-page1.json data/movie-page2.json data/movie-page3.json
