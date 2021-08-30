package server

import (
	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/cors"
	"github.com/YuyaYoshioka/bookshelf-app/server/controller"
)

func Init() {
	r := router()
	r.Run()
}

func router() *gin.Engine {
	r := gin.Default()
	r.Use(cors.Default())
	
	t := r.Group("/users")
	{
		ctrl := controllers.UserController{}
		t.POST("", ctrl.Create)
		t.GET("/:id", ctrl.Show)
	}
	t = r.Group("/login")
	{
		ctrl := controllers.LoginController{}
		t.GET("", ctrl.Show)
	}

	t = r.Group("/genres")
	{
		ctrl := controllers.GenreController{}
		t.POST("", ctrl.Create)
		t.GET("", ctrl.Index)
	}

	t = r.Group("/books")
	{
		ctrl := controllers.BookController{}
		t.POST("", ctrl.Create)
	}

	return r
}
