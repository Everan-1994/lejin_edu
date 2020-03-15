<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ChangeCourseCommentContentField extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('course_comments', function (Blueprint $table) {
            // 删除content字段
            $table->dropColumn('content');

            // 新建content字段
            $table->text('original_content')->comment('原始内容')->after('course_id');
            $table->text('render_content')->comment('渲染后的内容')->after('original_content');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('course_comments', function (Blueprint $table) {
            // 删除content字段
            $table->dropColumn('original_content');
            $table->dropColumn('render_content');

            // 新建content字段
            $table->text('content')->comment('内容')->after('course_id');
        });
    }
}
